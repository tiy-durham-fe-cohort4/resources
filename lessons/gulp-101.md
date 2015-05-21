# Gulp 101

We're going to start using gulp to serve our files.

Gulp is a build tool. It allows us to write code to help us write
code! Sounds kind of like the matrix.

Here's some of what we'll (eventually) get by using Gulp:

- live reload
- minification of our sources
- easy deploy to GitHub pages
- autoprefixing of our CSS
- ability to use SCSS
- script concatenation
- cache busting
- image optimizations

## Getting started

Normally, I just copy an old gulp configuration over from a previous project
and get started. But if you want to start from scratch, here's how to do it:

### Initialize your package.json file

First, in terminal, run: `npm init`

### Install some gulp packages

We're going to install some gulp packages that will let us:

- serve content (HTML, CSS, JS, etc)
- refresh the browser
- watch our content for changes

Run the following commands:

```
npm install --save-dev gulp-connect
```

### Creating our first gulpfile

Here's a simple file:

```javascript
// Require gulp and connect. The require function looks in
// the node_modules for a 'gulp' package and a 'gulp-connect'
// package, and returns the function or object exported from
// those packages.
var gulp = require('gulp'),
    connect = require('gulp-connect');

// The default task is what runs when you type 'gulp' in the
// terminal. In this case, default depends on 'watch' and 'serve'
// tasks, so those tasks will run before 'default'.
gulp.task('default', ['watch', 'serve']);

// The serve task starts a connect server on port 8000
// if you go to http://localhost:8000, you can see what
// is being served.
gulp.task('serve', function () {
  connect.server({
    root: './src',
    port: 8000,
    livereload: true
  });
});

// The watch task watches a directory for changes and tells the
// browser(s) connected to the server to refresh
gulp.task('watch', function () {
  gulp.watch('./src/**/*', ['reload']);
});

// The reload task tells the connect server to reload all browsers
gulp.task('reload', function () {
  gulp.src('./src/**/*').pipe(connect.reload());
});

```

### Running gulp!

- First, let's create a file to serve: `/src/index.html`
- Next, run `gulp` in the terminal

If all goes well, you should see a message like this:

```
[20:56:14] Server started http://localhost:8000
[20:56:14] LiveReload started on port 35729
```

Now, if you go to http://localhost:8000, you should see your
index.html file, and if you change index.html in Atom, the browser
should refresh!

### Deploying to gh-pages

Run this in your terminal to get the gh-pages gulp package:

```
npm install --save-dev gulp-gh-pages
```

Then, make your require statements (in `gulpfile.js`) look like this:

```javascript
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    ghPages = require('gulp-gh-pages');
```

And add this task somewhere in your `gulpfile.js`

```javascript
// Deploy our src folder to gh-pages
gulp.task('deploy', function() {
  return gulp.src('./src/**/*').pipe(ghPages());
});
```

Now, if you've got your site associated with GitHub, you can just run
this command from terminal to deploy to gh-pages:

```
gulp deploy
```

Pretty sweet!

## Where do you go from here?

We'll be building more and more complex gulp configurations to help us
do cool stuff. So, just follow along in class.

If you want to learn more, there are plenty of tutorials out there for gulp,
and you can Google for `best gulp plugins`.
