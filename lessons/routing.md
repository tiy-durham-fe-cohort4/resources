# Routing

Routing is the way you get your application to respond to changes in the URL
without making round-trips to the server.

Most modern apps use routing to make the site seem more snappy:

- Gmail
- Google Calendar
- GitHub

---

## Sample client-side URLs

Here are some examples of the Gmail URLs:

- Inbox: https://mail.google.com/mail/u/0/#inbox
- Individual email: https://mail.google.com/mail/u/0/#inbox/14d87b0a3cdeee4e

Note the `#` character in the URL.

That part of the URL is called the hash. The hash portion of a URL can change without the server ever knowing about it. It never gets sent to the server.

---

## URL parts

https://github.com/foobaz?abc=def&name=joe#last/but/not/least

- protocol: `https:`
- host: `github.com`
- pathname: `foobaz`
- hash: `#last/but/not/least`
- query: `?abc=def&name=joe`

Query parameters are name/value pairs separated by an `&`

---

## HTML5 history api

- Instead of listening for the hash change, we can listen for the whole URL
- Gives us SEO-friendly URLs
- Allows the server to render content if the browser doesn't support history api
- Requires that both server and client understands all URLs or else you get
a 404 when the user does a hard refresh
- ... so, we'll stick to the hash for now

---

## Listening for hash change

```javascript
function processHash() {
  // Get the hash part of the url without the '#' character
  var hash = (location.hash || '#').slice(1);

  // Do something like show a message or whatever
  if (hash === 'hi') {
    document.body.innerHTML = '<h1>Hi!</h1>';
  } else {
    document.body.innerHTML = '<h1>Bye!</h1>';
  }
}

// Listen for the hashchange event
window.addEventListener('hashchange', processHash);

// Show the default screen when we load
processHash();
```

---

## Routers

There are a bunch of libraries that have been written to make responding
to URL changes much easier! We'll sample a few, but we'll settle on Backbone's:

- [Backbone](http://backbonejs.org/)

---

## Backbone

```javascript
// Create a new instance of the backbone router object
var router = new Backbone.Router();

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();

// Add the default route, which runs when the url is blank
router.route('', function () {
  show('<h1>Home</h1>'); // Assume we've written show or something...
});

// Add the books route which runs when the URL is #books
router.route('books', function () {
  show('<h1>Books</h1>');
});

// Note, this is a bug!!!
router.route('books/new', function () {
  show('<h1>New Book</h1>');
});

// Define a url that matches #books/anything
router.route('books/:id', function (bookId) {
  show('<h1>Show Book ' + bookId + '</h1>');
});

// Kick off our initial route
Backbone.history.loadUrl();
```

---

### Backbone (contd)

- Very popular library
- We'll be using it next week, so I'd suggest using it
- Fairly slow
- Doesn't understand route specificity
  - You'd better define `books/new` after `books/:id`
- Doesn't generically handle query portions of the URL

---

## Alternatives

There are plenty of other routers (including one I wrote!). A good place to
go to find libraries that are small and focused is microjs:

http://microjs.com

---

## Example

Let's combine Backbone with lodash to create a single-page application that

- Supports the browser's history navigation (back/forward)
- Has the following routes/screens
- View list of items
- Add item
- Edit item
