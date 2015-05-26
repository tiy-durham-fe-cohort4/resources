# Week 3 Feedback (the user_mgmt project)!

## Still seeing lots of bad indentation

```html
<div class = "page-container">
    <h4>
      This h4 should be left by 2 spaces!!!
    </h4>
  <main class="main-content">
    <form class='user-form'>
    </form
  </main>
</div>
```

## jQuery data method

The jQuery data method is used to associate data with a DOM element.

So, this code:

```javascript
var index = li.data();
```

Should probably look like this:

```javascript
// get the value of the data-index attribute that is on the li
var index = li.data('index');
```

The data method is not usually called without arguments... I don't even know
what it would do in that case!

## Parent vs closest

I saw some folks doing this:

```javascript
var li = $(this).parent('li');
```

There's nothing wrong with that! But if you ever changed your structure so that
`$(this)` was no longer a direct descendent of li, then you'd have to change
this code. I'd suggest this:

```javascript
var li = $(this).closest('li');
```

Or better yet, this:

```javascript
var li = $(this).closest('.user');
```

## Paths

I saw some code that looked like this:

```html
<script src="/Users/desktop/usermgmt/init.js"></script>
```

Let's break that path down:

- The leading / means this: "Look in the root directory"
- The Users/desktop/usermgmt part says there should be a Users folder in the root
and a desktop folder in the Users folder and a usermgmt folder in the desktop folder.

Here's the problem. The GitHub servers (or wherever you host your site) will
not have a Users folder in their root directory. Or if they do, they *wont* have
/Users/desktop/usermgmt.

Since the referring HTML file was also located in /Users/desktop/usermgmt, it
could have just used a relative path:


```html
<script src="init.js"></script>
```

## Constructor naming

I saw something along these lines:

```javascript
app.AppointmentCreate(title, date, time) {
  this.title = title;
  this.date = date;
  this.time = time;
};
```

The problem here is the name. Instead of `AppointmentCreate` it would be more
common to just call the function: `Appointment`, and it can be called like
this:

```javascript
var appt = new Appointment('Stuff', '10/20/2015', '4:34 AM');
```

Constructors usually don't have verbs in the name. They are named after the
thing that they are creating. So, if a constructor is creating a user, it
should be called: `User`

## Folder structure

I saw some projects with a folder structure like this:

```
/usermgmt
  /js
  /css
  index.html
  icon.png
  header.jpg
```

Generally speaking, your images should go in their own folder:

```
/usermgmt
  /js
  /css
  /img
  index.html
```

So, what's wrong with this:

```
/usermgmt
  jquery.js
  index.html
  init.js
  site.css
```

Nothing is terrible, because the project is so small, but as the project grows,
you will want to separate your content into folders (and even sub-folders):

```
/usermgmt
  /js
    /vendor
      jquery.js
    init.js
  /css
    site.css
  /font
  /img
  index.html
```

## Document ready

Instead of this (totally valid) code:

```javascript
$(document).ready(function(){
  console.log('Ready!!!');
});
```

It's shorter and easier to type:


```javascript
$(function(){
  console.log('Ready!!!');
});
```

Which does the same thing.

## Use strict

I haven't seen many people doing `use strict`, but I would suggest it!

So taking the above example:


```javascript
$(function(){
  'use strict';
  console.log('Ready!!!');
});
```

It'll help prevent you from writing some common bugs!

## Local storage

Some of you were storing each user record with its own key in local storage
and then looping over local storage to remove. It's much easier to limit
your exposure to local storage to something like this:

```javascript
// Save all users to local storage
function saveUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

// Read all users from local storage
function loadUsers() {
  return JSON.parse(localStorage.getItem('users') || '[]');
}

```

- The `loadUsers` really only needs to happen once (when the app loads)
- The `saveUsers` happens any time the users array changes
