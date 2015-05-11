# DOM

---

## What is the DOM?

- Document Object Model
- It is how the browser's UI elements are represented in JavaScript
- Allows JavaScript to get, manipulate, update, and respond to the UI

---

## Getting a single UI element

```javascript

    // Gets the first h1 on the page
    var h1 = document.querySelector('h1');

    // Updates the h1 to show 'What up?'
    h1.textContent = 'What up?';

```

---

## Getting many UI elements

```javascript

    // Gets all elements of class 'foo'
    var foos = document.querySelectorAll('.foo');

    for (var i = 0; i < foos.length; ++i) {
      foos[i].textContent = 'Item number ' + i;
    }

```

---

## Alternatives

- getElementsByTagName
- getElementById
- getElementsByClassName

---

## DOM node lists are not arrays

- `querySelectorAll` returns a node list
- It's array-like in that it is zero-indexed, and has a length
- It is not an array, though, so you couldn't do this:

```javascript
document.querySelectorAll('.foo').forEach(function (item) {
  item.textContent = 'Hoi!';
});
```

---

## To convert a node list to an array

- `apply` the Array's slice method to the node list

```javascript
var arr = Array.prototype.slice.apply(document.querySelectorAll('h1'));

arr.forEach(function (item) {
  item.textContent = 'Bye';
});
```

---

## Generating HTML

- DOM elements (including `body`) have an innerHTML property
- It's a string
- When set, it updates the element's HTML content

```javascript
document.body.innerHTML = '<h1>Hello!</h1><p>This was generated</p>';

```

---

## Responding to events

- When the user interacts with the page, events are generated
- You can use JavaScript to respond to events
- (e.g. clicking, typing, submitting, etc)

Given this HTML:

```html
<input class="name">
<button>Submit</button>
```

You could write JavaScript which looks like:

```javascript
var txt = document.querySelector('.name');
var btn = document.querySelector('button');

btn.addEventListener('click', function () {
  alert('Hi, ' + txt.value);
});
```

---

## Exercise

- Write a little app that asks the user to guess a number between 1 and 10
- The user types her answer in an `input` field
- Indicate if the user's guess is too high or too low
- If the user guesses the number, indicate that she's won
- Don't use `alert`
- Update the DOM to indicate win, too low, too high, and any other messages
- You'll probably want to use `parseInt` to convert the user's input from a string to an integer
- You'll probably want to use `Math.random()` to generate a random number for the user to guess

---

## Events bubble up

- In our previous example, if we put our input and button inside a `.foo` div tag, the following would fire:

```javascript
document.querySelector('.foo').addEventListener('click', function () {
  alert('Foo was clicked!');
});
```

---

## Turning off the event bubble

- Say we wanted to cancel the event because we have handled it

```javascript
btn.addEventListener('click', function (e) {
  e.stopPropagation();
  alert('Hi, ' + txt.value);
});
```

- Event handling functions can take an optional argument
- The `e` is the event object
- It has quite a few handy properties

---

## Preventing default behavior

- Say we had a form

```html
<form class="login-form" method="POST" action="/login">
  <input type="text" name="username">
  <input type="password" name="password">
  <button>Login</button>
</form>
```

- What if we want to prevent it from submitting?

```javascript
var form = document.querySelector('.login-form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Stop the form from submitting
})
```

---

## Getting and setting attributes

```javascript
var txt = document.querySelector('input');

txt.getAttribute('name'); // returns the value of the name attribute
txt.setAttribute('name', 'username'); // sets the value of the name attribute
```

---

## Adding/removing classes

- There is a `classList` property
- It's only supported in IE10 and up
- An alternative is something like the following

```javascript
// Return an array of class-names associated with el
function classNames (el) {
  return (el.getAttribute('class') || '').split(' ');
}
```

---

```javascript
function addClass(el, className) {
  var classes = classNames(el);

  if (classes.indexOf(el) < 0) {
    classes.push(className);
    el.setAttribute('class', classes.join(' '));
  }
}
```

---

```javascript
function removeClass(el, className) {
  var classes = classNames(el);

  classes = classes.filter(function (name) {
    return name != className;
  });

  el.setAttribute('class', classes.join(' '));
}
```
