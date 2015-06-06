class: center, middle, inverse

# Browserify

Is awesome!!!

---

## What it does

- Allows you to write simple, focused JavaScript files without worrying about globals
- Makes each JavaScript file's dependencies explicit and clear
- Makes it much easier to test because you can mock dependencies
- You no longer have to worry (as much) about properly ordering your script tags
- You don't have to worry (as much) about properly referencing bower_components or whatevz 

---

## How it works

- You write a script
- Your script tells Browserify what other scripts it needs (e.g. jQuery, underscore, etc)
- Your script tells Browserify what value (an array, object, function, string, etc) it exports
- You run your script through a build step that uses Browserify, and...
  - Browserify automatically ensures that your dependencies get included in the right order
  - Browserify wraps your script in a `function() { /* your script here */ }` so that your file's
  variables aren't global
  - Browserify takes whatever your script exports and makes it available for other scripts to import

---

## Require example

Let's say, I've run this in the terminal:

```
npm install jquery underscore
```

Then, in `foo.js`, I could write this:

```javascript
'use strict';

var $ = require('jquery');
var _ = require('underscore');

$(function () {
  var fn = _.template('<h1>Hi, <%- m.name %></h1>', { variable: 'm' });
  $('body').html(fn({ name: 'Joe Shmo' }));
});

```

---

## Export example

If we have a `count-vowels.js` file like this:

```javascript
'use strict';

// This module exports a single function
module.exports = function (str) {
  // Use regex to count how many vowels are in str
  return (str || '').match(/[aeiou]/ig).length;
};

```

We could get it into `foo.js` like this:

```javascript
'use strict';

// vcount is the function that was exported in count-vowels.js
var vcount = require('./count-vowels');

console.log(vcount('Hello')); // logs 2

```

---

## Requiring npm packages vs local files

To require an npm package, you just `require('package-name')`

But to require a local file, you need to refer to the file's location using normal file path 
syntax like this: `require('./folder/subfolder/file-name')`

Note, you don't have to put a `.js` on the end of `file-name`

---

## Using it with Gulp

Browserify can be used without gulp, but why would we do that?

Also, I've made a gulp configuration for you! You're welcome.

But let's have a look at the important bits.

---

## Application scripts

This task looks at the `./src/js/init.js` script and slurps in all of its dependencies
and produces the file `./dist/js/app.js` which has everything it needs in order for `init.js` to
properly run: 

```javascript
gulp.task('js', function () {
  return browserify('./src/js/init.js', { debug: true })
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/js'));
});
```

---

## Vendor scripts

It's highly likely that our application scripts will change often, but our vendor scripts will
change rarely. 

By default, Browserify will include all required scripts in its output (producing one huge 
script file that has jquery, backbone, underscore, and all of your custom scripts in it).

You don't want that.

---

## Isolating changes

In programming, it's a good idea to identify and isolate areas of code based on the cause of their
changes. The *single responsibility principle* is an example of this.

- Our vendor scripts will only change on the rare occasion when we need to update them.
- Our application scripts will change any time we have new business logic
- Our views/templates, if bundled into a script, will change whenever we need to update the UI

Any one of these scripts might change without really affecting the others. So, it makes sense to
separate them into their own files so that the browser can cache them independently.

---

## Vendor scripts (contd)

To create a browserify bundle that stands alone, yet can be consumed by other bundles...

```javascript
// Bundle vendor scripts (jQuery, Backbone, etc) into one script (vendor.js)
gulp.task('js:vendor', function () {
  return browserify()
    .require('jquery')
    .require('underscore')
    .require('backbone')
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('./dist/js'));
});
```

---

## Browserify external scripts

Next, we need to tell our application script that it shouldn't bundle jquery, backbone,
underscore, or our views into its output:

```javascript
gulp.task('js', function () {
  return browserify('./src/js/init.js', { debug: true })
    .external('views')
    .external('jquery')
    .external('underscore')
    .external('backbone')
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/js'));
});
```

---

## Browserify plugins

Browserify can be extended by other people to do new things. For instance, we can require an entire
directory (instead of a single file) using a plugin called `bulkify`.

But we have to tell browserify we want to use that plugin.

Terminal:

```
npm install --save-dev bulkify
```

gulpfile.js:

```javascript
gulp.task('js', function () {
  return browserify('./src/js/init.js', { debug: true })
    .transform('bulkify') // Allow custom behavior that is not normally in browserify
    .external('views')
    .external('jquery')
    .external('underscore')
    .external('backbone')
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/js'));
});
```

---

## Conclusion

- Browserify is amazing
- So amazing, in fact, that ES6 (the next version of JavaScript) is including browserify-like features
- Isolate dependencies
- Easily create a properly ordered single script out of a whole bunch of script files
- Easily test scripts to make sure they work in isolation (as we'll see tomorrow)