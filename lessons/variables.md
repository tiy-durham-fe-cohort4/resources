class: center, middle

# Programming 101

---

# The program

Let's write a program that says hello.

---

# The HTML

We'll start off with this HTML file:

```html
<ul id="messages">
</ul>
<script src="js101.js"></script>
```

---

# The JavaScript

In `js101.js`, we'll have this:

```javascript
messages.innerHTML = '<li>Hullo, world.</li>';
```

The stuff in single quotes is called a string.

`string: programmer speak for "text"`

---

# New requirements

Now, the business wants us to say hello to all of their customers...

```javascript
messages.innerHTML = '<li>Hullo, Jane.</li><li>Hullo, John.</li><li>Hullo, Joe.</li>';
```

---

# Loooong strings

That's getting pretty long. Let's break it up.

```javascript
messages.innerHTML = '<li>Hullo, Jane.</li>' +
  '<li>Hullo, John.</li>' +
  '<li>Hullo, Joe.</li>';
```

Strings can't span multiple lines. So, what we've done here is create 3 strings
and concatenate (combine) them using the + operator.

---

# Typo correction

Whoops. We've said `Hullo` instead of `Hello`. Let's fix that.

```javascript
messages.innerHTML = '<li>Hello, Jane.</li>' +
  '<li>Hello, John.</li>' +
  '<li>Hello, Joe.</li>';
```

Ugh. What a pain. We had to make 3 changes to fix a single typo.

---

# Functions

Let's reduce some of that duplication.

```javascript
function makeGreeting(name) {
  return '<li>Hello, ' + name + '.</li>';
}

messages.innerHTML = makeGreeting('Jane') +
  makeGreeting('John') +
  makeGreeting('Joe');
```

---

class: center, middle

# Much better. But what's that function thing?

---

# Functions and recipes

A function is like a recipe

When I say, "Make a peanut butter and jelly sandwich"

- You know to execute a set of instructions
- You get bread
- You get peanut butter
- You get jelly
- You get a knife
- You prepare it in a certain sequence
- etc...

---

# Defining functions

Before I can tell you to `wozzywonk`, we first  have to define what `wozzywonk` means.

The same is true of functions. The first step is to define a function.

Defining a function is not the same as calling (or executing) the function, just like
defining the word `dance` is not the same as dancing!

---

# Analysis

```javascript
function makeGreeting(name) {
  return '<li>Hello, ' + name + '.</li>';
}
```

- This is a function definition
- The function is named `makeGreeting`
- Doesn't do anything until we call it
- We call it like this `makeGreeting('Foo')`
- One argument: `name`
- Returns a string

---

# Back to the program

```javascript
function makeGreeting(name) {
  return '<li>Hello, ' + name + '.</li>';
}

messages.innerHTML = makeGreeting('Jane') +
  makeGreeting('John') +
  makeGreeting('Joe');
```

- We've defined a function
- We've called it 3 times
- We've concatenated the results
- We've updated our HTML document

---

# DRY

Don't repeat yourself

---

# Showing account data

Let's say we wanted to show account data...

```javascript
function makeAcctSummary(name, owes, paymentSize) {
  return '<li>' + name + ' will pay off ' + owes + ' in ' + (owes / paymentSize) + ' months</li>';
}

messages.innerHTML = makeAcctSummary('Jane', 1000, 100) +
makeAcctSummary('John', 2300, 100) +
makeAcctSummary('Joe', 1324, 32);
```

---

# Tidying it up a bit

This line is a little confusing now:

```javascript
return '<li>' + name + ' will pay off ' + owes + ' in ' + (owes / paymentSize) + ' months</li>';
```

We could make things a little clearer:

```javascript
function makeAcctSummary(name, owes, paymentSize) {
  var monthsLeft = owes/paymentSize;
  return '<li>' + name +
    ' will pay off ' + owes +
    ' in ' + monthsLeft + ' months</li>';
}
```

---

# Variables

```javascript
function makeAcctSummary(name, owes, paymentSize) {
  var paymentsRemaining = owes/paymentSize;
  return '<li>' + name + ' has ' + paymentsRemaining + ' payments left</li>';
}
```


