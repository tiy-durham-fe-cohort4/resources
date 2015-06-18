# Backbone 101

A crash-course (with followups next week!)

---

## What is it?

- Helps clean up your projects
- Separation of concerns
- Simplifies some common tasks (such as dealing with RESTful APIs)

---

## Why learn it instead of Angular/Ember?

- [Popular](http://backbonejs.org/#examples)
- Simple and small compared to the competition
- Builds on previous concepts from this class

---

## Views

- In Backbone, a view is really just a UI component or widget
- Logic that is associated with/manages some part of the DOM
- In simple apps, you often have a view per page of the app
- Generally:
  - Takes data
  - Uses a template to generate HTML representation of the data
  - Puts the generated HTML into the DOM
  - Binds events 
  - Safely unbindes events (in most cases)
- Sound familiar? Its called a controller in most other frameworks.

---

![Model view diagram](http://backbonejs.org/docs/images/intro-model-view.svg)

---

## Defining a view

- [Backbone View Demo](https://github.com/tiy-durham-fe-cohort4/resources/blob/master/demos/backbone/sample-view.js)

---

## Lots more

- Views can do a *lot*
- It's worth reading the Backbone docs!

---

## Models and Collections

- The data of your application
- Handle RESTful CRUD for you
- Observable (meaning you can ask them to notify you when they change)
- One of the handiest features of Backbone

---

![Collection diagram](http://backbonejs.org/docs/images/intro-collections.svg)

---

## Defining collections and models

- [Backbone Model Demo](https://github.com/tiy-durham-fe-cohort4/resources/blob/master/demos/backbone/sample-model-and-collection.js)

---

## Loading/syncing data with the server

Backbone does lots o AJAX for you!

```
GET  /books/ .... collection.fetch();
POST /books/ .... collection.create();
GET  /books/1 ... model.fetch();
PUT  /books/1 ... model.save();
DEL  /books/1 ... model.destroy();
```

---

## Putting it all together

- Let's revisit Mason Stewart's assignment and see how we might build an app that:
  - Is an image gallery
  - We can add images (via URL)
  - Remove images
  - Favorite images
  - Show only favorited images

---

## Reading

- [Docs](http://backbonejs.org/)
- [Free book](http://addyosmani.github.io/backbone-fundamentals/)








## Collections

Expect to be initialized via an array, so if your endpoint returns something else, e.g.
a hash with an array property:

```javascript
{
  "page": 1,
  "limit": 10,
  "total": 2,
  "books": [
    {"id": 1, "title": "Pride and Prejudice"},
    {"id": 4, "title": "The Great Gatsby"}
  ]
}
```

Then you'd need to customize the collection to know about this:

```javascript
var Books = Backbone.Collection.extend({
  url: '/books',
  parse: function(data) {
    return data.books;
  }
});
```

  
## Initializing Models

```javascript
var Todo = Backbone.Model.extend({
  // Default todo attribute values
  defaults: {
    title: '',
    completed: false
  },
  
  initialize: function () {
    // Initialization logic goes here
  }
});

var t = new Todo();
var t2 = new Todo({ title: 'Meet Sally' });
t.toJSON(); // returns a simple JavaScript object instead of a Backbone model
```

---

### Getting or setting attributes (properties)

```javascript
var m = new Backbone.Model();
m.set('name', 'Christopher Davies');
m.set('gender', 'm');
m.get('name'); // returns Christopher Davies
m.unset('name'); // deletes the name key from m

// Can be chained
m.set('name', 'Christopher')
 .set('email', 'joe@shmo.com');

m.set({
  name: 'Kelly Murray',
  gender: 'f'
});

```

--- 

### Observing models

```javascript
var user = new Backbone.Model();

user.on('change', function () {
  console.log('Something changed.');
});

user.on('change:email', function () {
  alert('Email is now ' + user.get('email'));
});

// Runs both change events registered above
user.set('email', 'foo@bar.com');

// Doesn't trigger the change:email event, but does trigger 'change' and 'change:name'
user.set('name', 'Joe');
```

---

### Suppressing model change events

```javascript
// Doesn't trigger any events
user.set({ name: 'Sally' }, { silent: true });
```

---

### Detecting changes to a model

In a change event handler, if you want to, you can do something like:

```javascript
// This is true
console.log(user.hasChanged('name'));

// This is also true
console.log(user.hasChanged());

// This is false
console.log(user.hasChanged('age'));
```

---

### Validating data

Backbone can validate, but I'd honestly use something like Parsley instead...

```javascript
var User = Backbone.Model.extend({
  defaults: {
    isAdmin: false
  },

  // If the validate method returns a message, then the model's save won't occur
  // and the model will trigger an 'invalid' event, and adds a validationError 
  // property (or attribute, in Backbone's terminology) containing the error
  validate: function (attrs) {
    if (!attrs.name) {
      return 'Name is required';
    }
    
    if (!attrs.email) {
      return 'Email is required';
    }
  }
});

// Elsewhere
var userProps = formToUser(); // Assuming we've written this function
var u = new User();

u.on('invalid', function (m, error) {
  showError(error); // assuming we've written a showError function or something...
});

u.set(userProps, { validate: true });
```

---

## Events

Can be space-delimited...

```javascript
book.on("change:title change:author", doStuff);
book.on('change', this.render, this); // third argument is the 'this' argument
```

The 'all' event is special, and basically runs any time *any* event occurs on the object

An alternative syntax

```javascript
book.on({
  "change:title": titleView.update,
  "change:author": authorPane.update,
  "destroy": bookView.remove
});
```

---

## Collection methods and events

- `fetch()` loads the collection from the API endpoint
