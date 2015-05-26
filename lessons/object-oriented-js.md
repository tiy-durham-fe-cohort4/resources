# Object Oriented JavaScript

---

An object is a structure which contains data and methods for accessing and
manipulating that data.

Using JavaScript's object literal syntax, we might create a circle object
like this:

```javascript

var circle = {
  center: {
    x: 50,
    y: 45
  },

  r: 30,

  area: function () {
    return Math.PI * this.r * this.r;
  }
};

```

---

## This

An object's methods can refer to the object using the `this` keyword.

```javascript

var name = 'Joe';

var monster = {
  name: 'Hary',
  describe: function () {
    // prints 'Joe': is referring to the name variable
    console.log(name);

    // prints 'Hary': is referring to its object's name property
    console.log(this.name);
  }
};

```

---

## Constructors

What if we wanted to have many circles? It would get tedious
(not to mention error-prone) to have to do this:

```javascript

var circles = [{
  center: {
    x: 50,
    y: 45
  },

  r: 30,

  area: function () {
    return Math.PI * this.r * this.r;
  }
}, {
  center: {
    x: 90,
    y: 45
  },

  r: 40,

  area: function () {
    return Math.PI * this.r * this.r;
  }
};]

```

---

### Constructors (contd)

So, we make functions that serve only one purpose-- to create object
instances for us:

```javascript
function Circle(x, y, radius) {
  return {
    center: {
      x: x,
      y: y
    },

    r: radius,

    area: function () {
      return Math.PI * this.r * this.r;
    }
  };
}
```

---

### Constructors (contd)

Constructors like the one above are just normal functions, but the convention
is to capitalize their first letter.

Now, we can make our list of circles:

```javascript
var circles = [
  Circle(4, 8, 3),
  Circle(50, 40, 30),
  Circle(22, 98, 20)
];
```

Much cleaner!

---

## Problems with object literal syntax

The previous example used object literal syntax to define and return an object.

Makes a copy of each method e.g. `add, remove` for each instance when the
only thing that really *needs* to change between each instance is the data

This wastes memory unnecessarily and performs slowly compared to the more
idiomatic JavaScript approach...

---

## Prototypal constructors

Alright. Here's the more idiomatic JavaScript way to make
objects. This is more prevalent, faster, and more memory-efficient.

```javascript
function Circle (x, y, radius) {
  this.x = x;
  this.y = y;
  this.r = radius;
}

// Wait, what's all this!?! (We'll get to it...)
Circle.prototype.area = function () {
  return return Math.PI * this.r * this.r;;
};


```

---

### Prototypal constructors and new

Using this syntax, we would make our array of circles like this:

```javascript
var circles = [
  new Circle(4, 8, 3),
  new Circle(50, 40, 30),
  new Circle(22, 98, 20)
];
```

Note the use of the `new` keyword. This tells JavaScript that we are calling
the function `Circle` as a constructor. When called this way, the constructor
function will implicitly return a value (the `this` value).

---

## Prototypes

A constructor's prototype

- Is shared across all instances of objects created by that constructor
- Can be changed at any time
- You can modify *any* prototype, including those for built-in types
  - This is generally a terrible idea
  - Can be useful for adding new standard features to old browsers (shimming)

```javascript
var s = 'hi';

console.log(s.reverse); // undefined

String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

console.log(s.reverse()); // 'ih'

```

---

### Prototypal inheritance...

I'll just quote MDN, here:

"When it comes to inheritance, JavaScript only has one construct: objects. Each object has an internal link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. null, by definition, has no prototype, and acts as the final link in this prototype chain."

---

### Prototypal Inheritance (contd)

[Contrived animal example](http://jsbin.com/fonoho/1/edit)

[Less contrived writer example](http://jsbin.com/xibujo/1/edit?js,console)

[Collection example](http://jsbin.com/siquze/1/edit)

---

### In theory

- Inheritance is a good idea

---

### In practice

- It's overused
- It leads to confusion
- For any example of when it might be a good idea
  - I can generally think of a clearer way to solve the problem without it
- When I do use it, it's usually to selectively mix in functionality from
 elsewhere

---

### But you need to know about it

- You're going to see it
- You're going to be asked about it

---

## Computed properties with getters/setters

```javascript

function User (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype = {
  get name () {
    return this.firstName + ' ' + this.lastName;
  },

  set name (val) {
    var pieces = val.split(' ');
    this.firstName = val[0];
    this.lastName = val[1];
  }
};


```

---

### Getters/setters (contd)

Can be added dynamically at a later time without object-literal syntax:

```javascript
Object.defineProperty(User.prototype, 'name', {
  get: function() {
    return this.firstName + ' ' + this.lastName;
  },
  set: function(val) {
    var pieces = val.split(' ');
    this.firstName = val[0];
    this.lastName = val[1];
  }
});
```

---

## When to create objects vs functions?

- Objects are the nouns in your bullet points
- Methods/functions are the verbs

For example

- Get *user info* from form
- Add it to the *user list*
- Raise an error if the user is already in the list

---

## Constructor rules

- Instance-specific data is defined in the ConstructorFunction using the
`this.prop = value` approach
- Methods are defined in the function's prototype, and are thus only created
once and shared across all instances of the object
- If there *is* data that you want to share across all instances, you can put
that in the prototype, too
- Every function in JavaScript has a prototype, which is just an object
- Prototypes allow for powerful (and somewhat dangerous) behavior

---

## Abstraction and encapsulation

- Objects are generally used to abstract difficult or complex functionality
- jQuery is a good example of this it gives you an object that encapsulates
(or hides) the complexity of the DOM from you.

[Timer Object Demo](http://jsbin.com/mahahi/1/edit?js,output)

---

## Pitfalls and common mistakes

- Using `this` in the wrong context
- Forgetting to use `Object.create` when extending another prototype

---

### Mistake: using this in the wrong context

```javascript
function Modal(content) {
  this.root = $('<div class="modal" />').html(content);

  this.root.on('click', '.close-modal', function () {
    // Error! this is no longer referring to the Modal object, because
    // the click event handler function is running in a different
    // context!
    this.hide();
  });
}

Modal.prototype = {
  show: function () {
    $('body').append(this.root);
  },

  hide: function () {
    this.root.remove();
  }
};
```

---

### The this fix

```javascript
function Modal(content) {
  // Capture the value of 'this' in a local variable
  var me = this;

  this.root = $('<div class="modal" />').html(content);

  this.root.on('click', '.close-modal', function () {
    // We are now referring to the 'me' variable which will work because
    // it is captured in a closure
    me.hide();
  });
}
```

---

### Mistake: forgetting Object.create

```javascript
function Person() {
}

Person.prototype = {
  greet: function () {
    return 'Good morning!';
  }
};

function Jerk() {
}

Jerk.prototype = Person.prototype;
Jerk.prototype.greet = function () {
  return 'Shove off!';
};

console.log(new Person().greet()); // 'Shove off!'

```

---

### The prototype fix

```javascript
Jerk.prototype = Object.create(Person.prototype);
```

---

## Summary

- In JavaScript, objects are hashes that generally contain both data *and*
functions
- Functions that belong to an object are called *methods*
- Objects are constructed using constructor functions
- Constructor functions are PascalCased
- When called using the `new` keyword, constructor functions return `this`
- The meaning of `this` changes based on context, so
  - Cache it in a local variable `var me = this;` when you need to refer to
  this from a nested function call
- If you have a field/property whose value is dependent on another field,
  - Use a getter and/or setter
