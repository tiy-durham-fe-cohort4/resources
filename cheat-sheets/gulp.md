# Gulp Cheat Sheet

How to get started using Gulp.

1. You can [build your own Gulp configuration](https://github.com/tiy-durham-fe-cohort4/resources/blob/master/lessons/gulp-101.md)
2. You can copy an existing one

NOTE: If you find a bug or problem with this doc, let me know, and I'll fix it!

## Copying our class gulp project

### Clone the project

But replace `my-new-project` with whatever project name you want.

```
git clone git@github.com:tiy-durham-fe-cohort4/gulp-base.git my-new-project
```

### Get rid of the .git folder

```
cd my-new-project
rm -rf .git
```

That way, your project doesn't think it's my `gulp-base` project.

### Tell npm the details of your app

Edit your `package.json`.

Change `"name": "gulp-base",` to `"name": "my-new-project",`

And this `"author": "",` to  `"author": "Your Name <youremail@example.com>",`

You might also want to add your project's github URL to the `package.json` so
 you avoid annoying warnings in the terminal:

```
"repository": {
  "type": "git",
  "url": "https://github.com/your-git-id/my-new-project"
},
```

### Tell bower the details of your app

Edit your `bower.json`.

Change `"name": "gulp-base",` to `"name": "my-new-project",`

Change `"homepage": "http://urltoyourgithubrepo.com",` to have your github URL.

Change authors to have your name and email:

```
"authors": [
  "Your Name <your@emailaddress.com>"
],
```

### Initialize git

```
git init
git add .
git commit -m "Initial checkin"
```

### Install any dependencies

```
npm install
bower install
```

###

The end. Now, your project is ready for you to be up and hacking.

---

## Changing the project...

If you want to modify the gulp build process, to add new bower dependencies
or new gulp tasks:

### To add new bower dependencies

Use the `--save` flag. For example, to install `underscore`:

```
bower install --save underscore
```

That will put `underscore` into your `bower.json` as a dependency.

You'll need to include your new package in `gulpfile.js`:

Find the `js:vendor` task that we wrote, and add your underscore file(s) to the
array:

```javascript
// Bundle vendor scripts (jQuery, Backbone, etc) into one script (vendor.js)
gulp.task('js:vendor', function () {
  return gulp.src([
    './bower_components/jquery/dist/jquery.min.js',
    './bower_components/underscore/underscore-min.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/js'));
});
```

Now, you can include `js/vendor.js` in your HTML file(s), and you'll get
jQuery and underscore.

### To add new npm dependencies

Use the `--save-dev` flag. For example, to install [browserify](https://www.npmjs.com/package/browserify)

```
npm install --save-dev browserify
```

That will put `browserify` into your `package.json` as a dependency.

You'll have to add it into your `gulpfile.js` in the right place, so you'll
need to read the docs about it.
