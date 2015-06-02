# Gulp 101

Aka "What is Gulp, and why should I care?"

---

## Gulp is a build tool

- What's a build tool?
- Something that takes your source code (javascript, css, html, etc) and
transforms it into a different (production-ready) state

---

## Code that helps us write code?

Sounds kind of like the matrix.

---

## Why should I care?

There are so many reasons Gulp is awesome... Here are a few:

- live reload
- autoprefixing of our CSS
- ability to use SCSS
- easy deploy to GitHub pages
- minification of our sources
- script concatenation
- cache busting
- image optimizations

---

## Getting started with teh Gulps

Normally, I just copy an old gulp configuration over from a previous project
and get started. But if you want to start from scratch, here's how to do it:

---

### Initialize your package.json file

First, in terminal, run: `npm init`

---

### What's NPM? And what's package.json?

- NPM === Node Package Manager
- It's a handy tool that fetches packages (folders of code) written by other
folks
- We can then use those packages FTW!!!
- Bower is one such package that you've already used!

---

### Yeah. But what's package.json?

- A JSON file that tells NPM about your project (or package)
  - Your project's name
  - The version of your project
  - What other packages yours depends on
  - etc, etc

If you want to use Gulp, your project needs to be an NPM project.

That is all.

---

### Install some gulp packages

We're going to install some gulp packages that will let us:

- watch our content for changes and tell the browser to refresh

---

### Install gulp-connect

Run:

```
npm install --save-dev gulp-connect
```

- This installs gulp-connect
- The `--save-dev` flag tells NPM to update our project.json (check it out)
- gulp-connect is an npm package that allows us to refresh the brwoser

---

### Creating gulpfile.js

The final piece we need is a script that we will use to tell Gulp what to do.

The file needs to be named `gulpfile.js` (it's the name Gulp expects).

When you run the `gulp` command from the terminal, Gulp will load `gulpfile.js`
and execute it.

*Note: It doesn't run in the browser. It runs on your machine, just like any
regular old application.*

---

### Simple gulpfile.js

```javascript
// Require gulp and connect. The require function looks in
// the node_modules for a 'gulp' package and a 'gulp-connect'
// package, and returns the function or object exported from
// those packages. (More on exporting later.)
var gulp = require('gulp');
var connect = require('gulp-connect');

// The default task is what runs when you type 'gulp' in the
// terminal. In this case, default depends on 'watch' and 'serve'
// tasks, so those tasks will run any time we tell 'default' to run.
gulp.task('default', ['watch', 'serve']);

// Serve is a name I made up. You could call it 'dostuff' or whatever.
// The task starts a connect server on port 8000 if you go to
// http://localhost:8000, you can see what is being served.
gulp.task('serve', function () {
  connect.server({
    root: './src', // Serve content out of the ./src folder
    port: 8000, // Serve on port 8000
    livereload: true // Allow us to reload the app in the browser at will
  });
});

// The watch task watches a directory for changes and tells the
// browser(s) connected to the server to refresh. I also made this name
// up. In fact, the only name that has intrinsic meaning to gulp is the
// 'default' task.
gulp.task('watch', function () {
  // Here, we tell gulp to watch ./src and any subfolders beneath it
  // and when any of those change, gulp will run the 'reload' task.
  gulp.watch('./src/**/*', ['reload']);
});

// The reload task tells the connect server to reload all browsers
gulp.task('reload', function () {
  // This pipe thing is weird but awesome, and we'll talk about it in a
  // sec...
  gulp.src('./src/**/*').pipe(connect.reload());
});

```

---

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
should refresh! *Yaya!*

---

### Deploying to gh-pages

Run this in your terminal to get the gh-pages gulp package:

```
npm install --save-dev gulp-gh-pages
```

---

Then, make your require statements (in `gulpfile.js`) look like this:

```javascript
var gulp = require('gulp');
var connect = require('gulp-connect');
var ghPages = require('gulp-gh-pages');
```

---

And add this task somewhere in your `gulpfile.js`

```javascript
// Deploy our src folder to gh-pages
gulp.task('deploy', function() {
  return gulp.src('./src/**/*').pipe(ghPages());
});
```

---

### Easy deploy to gh-pages (no more excuses!)

If you've got your site associated with GitHub, you can just run
this command from terminal to deploy to gh-pages:

```
gulp deploy
```

It'll automatically deploy your source to gh-pages. It even creates the branch
for you, so you don't need to do that!

*Pretty sweet!*

---

## Gulp src and pipe

```javascript
return gulp.src('./src/**/*').pipe(ghPages());
```

That code is saying this:

- Gulp, grab all the files in ./src and its sub-directories
- Pipe each one to the ghPages plugin
- The ghPages plugin is then tots smart enough to know how to deploy said
files to GitHub pages.

---

## Adding SCSS for some sweet fanciness

```
npm install --save-dev gulp-sass
```

From now on, instead of creating CSS files, we'll create SCSS files.
(e.g. 'foo.scss')

And we'll use Gulp to convert them into CSS.

---

## Why, you ask?

For now, it's because it allows us to write lots of `.scss` files but produce
a single `.css` file. So, nice code-organization for zero-cost.

---

## Auto-prefixing our fancy CSS

- [Vendor prefixes](http://shouldiprefix.com/) are a pain
- It's partly why I didn't talk much about them
- Also, you don't have to worry about them, because we have a nifti tool

```
npm install --save-dev gulp-autoprefixer
```

---

## Putting it all together

```javascript
gulp.task('css', function () {
  return gulp.src('./src/css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('main.css'))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./src/css'));
});
```

And add 'css' to your default task dependencies and your reload dependencies.

---

## One last thing...

We are currently writing code in `./src` and we are puting our build artifacts
(e.g. the css file generated by scss) in `./src`.

Generally, this isn't a great idea.

What we generally want to do is this:

- Put all of our code in `./src`
- Build all of our code to `./dist` or some other folder
- Deploy `./dist` instead of `./src`
- We generally want to blow away and regenerate `./dist` every time we run `gulp`

This prevents us from checking in generated code... something that will
*always* cause us merge-conflicts and headaches.

---

## So .gitignore

Should look something like:

```
node_modules
dist
```

And prolly other stuff.

---

## Where do you go from here?

We'll be building more and more complex gulp configurations to help us
do cool stuff. So, just follow along in class.

If you want to learn more, there are plenty of tutorials out there for gulp,
and you can Google for `best gulp plugins`.
