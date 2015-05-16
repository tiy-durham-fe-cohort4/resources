# Functional JavaScript


- Scope
  - Argument names are not related to the variable names you pass into them
- Closure

---

## Scope: Local scope

Variables defined in a function (including the function's arguments) are not
available outside of the function.

```javascript

function say(msg) {
  var x = msg.length;

  console.log(msg + ' is ' + x + ' chars long');
}

var aThingamabob = 'Hey, this is a string';
say(aThingamabob);

console.log(x); // illegal
console.log(msg); // illegal

```

---

### Scope: Global scope

Variables defined outside of a function are available *everywhere* and are
called `globals`.

```javascript

var foo = 'bar'; // This is available in all subsequent .js files on the page

function sayHi() {
  console.log('Hi, ' + foo); // works
}

```

---

### Scope: Closures

A function defined inside of another function can access the outer function's
variables and arguments, but the outer function cannot access the inner
function's stuff...

```javascript

function sayHi(msg) {
  var x = msg.length;

  function add(amount) {
    var y = (x + amount) * msg.length; // Works
    return y;
  }

  console.log(y); // illegal
  console.log(amount); // illegal

  return add;
}

```

---

### Scope: Why?

Why is it illegal for an outer function to access the inner function's vars?

Because the inner function's variables have no values until the inner function
is called. And the inner function could be called any number of times. So,
how would the outer function know which call to the inner function it was
referring to when it accessed the inner function's variables?

---

### Scope: Avoid globals

---

## Pure functions

- Produce no side-effects
- Don't rely on global/external state
- If you give them the same arguments, they produce the same results

---

## Impure example

```javascript

// This is impure. It relies on users and searchTerm
// which are (presumably) globals. Calling this
// function multiple times could yield diferent
// results, if global state changes between calls
function filteredUsers() {
  return users.filter(function (u) {
    return u.name.indexOf(searchTerm) >= 0;
  });
}

```

---

## Pure example

```javascript

// This is pure. It does not rely on any globals
// if you pass it the same array and searchTerm,
// you'll always get the same results.
function filteredUsers(users, searchTerm) {
  return users.filter(function (u) {
    return u.name.indexOf(searchTerm) >= 0;
  });
}

```

---

## Pure functions: Why prefer them?

- Understandable
- Predictable
- Testable
- Not always possible
  - DOM interaction is impure
  - AJAX is impure
  - etc

---

## High-order functions

- A function which does one or both of the following:
  - Takes another function as its input (argument)
  - Returns a function as its output (return value)
- An extremely powerful construct when used properly

---

### High-order functions: Demo

```javascript

// Here's a function that takes two arguments:
// - arr which is an array
// - fn which is a function to be called for each item in the array
function forEach(arr, fn) {
  for (var i = 0; i < arr.length; ++i) {
    fn(arr[i]);
  }
}

// Example usage:
forEach(['Hello', 'World'], alert);

```

---

### High-order functions: Demo

```javascript

// Here's a function that takes two arguments:
// - arr which is an array
// - fn which is a function that maps each item in the array to a new value
function map(arr, fn) {
  var result = [];

  forEach(arr, function (oldValue) {
    var newValue = fn(oldValue);
    result.push(newValue);
  });

  return result;
}

// Sample usage maps a list of names to a list of personalized greetings:
console.log(map(['Chris', 'Kelly'], function (name) {
  return 'Hello, ' + name;
}));

```

---

### A note about passing functions

What's the difference between these?

```javascript

bar(foo());
bar(foo);

```

???

The first one runs foo and passes its return value to bar
The second one passes the function bar into foo

---

### High-order functions and arrays

Arrays have a set of really handy functions. Each of which has a variant that
takes a function as an argument.

- map, filter, reduce, some, every, sort, replace

There are others, but these are your bread and butter. *Look em up.*

---

### High-order functions and arrays

```javascript

// Users is an array of hashes representing user records
users.filter(function (user) {
  return user.age > 99;
}).map(function (user) {
  return user.email;
}).forEach(function (email) {
  addEmailToCentenarianList(email);
  removeEmailFromYouthGroup(email);
});

```

---

### Every and some

```javascript

if (users.some(function (u) { return !u.email; })) {
  showError('Some users don\'t have emails.');
}

if (users.every(function (u) { return u.age < 30; })) {
  showMessage('Every user is super young!');
}

```

---

### Reduce: Computing average user age

```javascript

var sumOfAges = users.reduce(function (sum, user) {
  return sum + user.age;
}, 0);

var average = sumOfAges / users.length;

```
