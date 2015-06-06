class: center, middle, inverse

# Unit testing, TDD, CI&D, and Jasmine

---

## Unit testing

- Code that verifies that your code works as expected
- You call a function
  - Pass it certain values
  - Verify that the return value is what you expected
  
Example:
  
```javascript
expect(reverse('hi')).toBe('ih');
```

---

## TDD

- Test Driven Development
- You write a test *first*
- Then you write just enough logic to get the test to pass
- Then you write another test, etc
- Not always practical, but in certain cases, *really* helpful

---

## TDD Example using Jasmine

[TDD demo project](https://github.com/tiy-durham-fe-cohort4/tdd-demo)

---

## And... we're back

Let's talk about Jasmine

![Jasmine](http://upload.wikimedia.org/wikipedia/en/7/71/Princess_Jasmine_disney.png)

---

## Jasmine

Install it

```
npm install -g jasmine
```

---

### Reference it in package.json

This makes `npm test` run all `.spec.js` files in your `test` directory

```javascript
"scripts": {
  "test": "jasmine-node test/*.spec.js"
},
```

--- 

### Write some tests

You start off by creating a `foo.spec.js` file, where `foo` is the name
of the module you are testing.

---

### Tell Jasmine what it is you're testing

In `foo.spec.js`:

```javascript
describe('sum', function () {
  // All your tests go here
});
```

---

### Require the module you want to test

```javascript
var sum = require('../src/js/sum.js');

describe('sum', function () {
});
```

---

### Add expectations

```javascript
var sum = require('../src/js/sum.js');

describe('sum', function () {
  it('should add two numbers', function () {
    expect(sum(1, 2)).toBe(3);
  });
  
  it('should add 7 numbers', function () {
    expect(sum(1, 1, 1, 1, 1, 1, 1)).toBe(7);
  });
});
```

---

### Run your tests in terminal

`npm test`

---

## Jasmine functions and methods

---

## toBe or toEqual

- `toBe` does a strict comparison (basicaly, ===)
- `toEqual` does a non-strict comparison (==)

---

## Handy dandy stuff

Different ways to express yourself:

```javascript
expect(false).not.toBe(true);
expect(false).toBe(false);
expect(false).toBeFalsy(); // Not strict, 0, undefined, null, etc are falsy
```

---

## More handy dandy stuff

```javascript
// Regular expression support
expect(something).toMatch(/bar/);

// a.foo should not be `undefined`
expect(a.foo).toBeDefined();

// a.bar should be `undefined`
expect(a.bar).not.toBeDefined();
```

---

## Even more handy dandy stuff

- `toBeDefined`
- `toBeUndefined`
- `toBeNull`
- `toBeTruthy`
- `toBeFalsy`
- `toContain` asserts that an array contains a value `expect(arr).toContain('bob')`
- `toBeLessThan`
- `toBeGreaterThan`
- `toBeCloseTo` checks that a float (decimal) is close to some value [details](https://www.safaribooksonline.com/library/view/javascript-testing-with/9781449356729/_nearness_tobecloseto.html)

---

## Testing for exceptions

Sometimes your code might throw errors. These are not as straightforward to test.

This constructor might throw an exception:

```javascript
function User(name) {
  if (!name) {
    throw new Error('Name is required');
  }
  
  this.name = name;
}
```

---

## Exceptions

- Exceptions totally hose everything
- They crash an application unless the application "catches" them

```javascript

try {
  var u = new User();
  render(u);
} catch (err) {
  console.error(err);
}

// If we hadn't done the try/catch block, and new User() threw an exception, this
// line of code here would never run
console.log('Here');

```

---

## Testing for exceptions (contd)

```javascript
var Use = require('../src/js/user.js');

describe('User', function () {
  it('should require name', function () {
    // We have to write a function which will cause an exception when called
    function makeUserWithoutName() {
      new User();
    }
    
    // Then, we expect the exception like this
    expect(makeUserWithoutName).toThrow();
    
    // Or we could also verify the exception's message
    expect(makeUserWithoutName).toThrowError('Name is required');
  });
});
```

---

## Doing stuff before and/or after each test

```javascript

describe('sum', function () {
  var objToTest = undefined;
  
  // Before each test, we'll set objToTest to a brand new value
  beforeEach(function() {
    objToTest = new Foo();
  });
  
  // After each test, we'll call some method on objToTest
  afterEach(function() {
    objToTest.unbindAllEvents();
  });
});
```

---

## Asynchronous tests

Testing asynchronous code used to be painful, but now it's simple.

Say, we are testing a function `foo` that loads some data asynchronously:

```javascript
it('should add 7 numbers', function (done) {
  foo('hello.txt', function (result) {
    expect(result).toBe('hello, world');
    done();
  });
});
```

---

## Spying

Often, you want to check to see if a function got called with some specific argument.

You can do this with spying.

- Allows you to see how many times a function got called
- Whether the function got called with the arguments you expected
- Useful for mocking (see below)

[Details here](http://jasmine.github.io/2.0/introduction.html#section-Spies)

---

## Mocking

Sometimes you want to test a function that does some stateful thing, such as manipulate the DOM
or change the window.location. These kinds of things:

- Can't be easily done from terminal
- Are slow, and unit tests should be *fast* or else people won't run them

So, the solution is to give your function a "mock" object that pretends to be the DOM or whatever,
but is in fact just a fake.

---

## Mocking (contd)

Say we wanted to test this function:

```javascript
function say(str) {
  document.body.innerHTML = str;
}
```

It'd be really tough to do. So let's change the function to be more testable (and incidentally also
more generic).

---

## Mocking (contd)

```javascript
function say(str, el) {
  el.innerHTML = str;
}
```

Now, we can pass it a fake (mock) value for el and test it, but we have the added benefit that
this function is now more flexible, too!

---

## Mocking (contd)

```javascript
it('should update innerHTML', function () {
  var mockEl = {};
  
  say('hi', mockEl);
  
  expect(mockEl.innerHTML).toBe('hi');
});
```

--- 

## CI&D

- Continuous Integration And Deployment
- Means your code is constantly 
  - Being tested for breakage
  - Being deployed
- Absolutely *essential* for production projects
- You catch deployment and integration errors early, instead of during the tense moments of releasing

---

## Automated tests

- Any time you (or anyone) pushes changes
  - your tests are automatically run
  - you are notified if things are broken

[TravisCI](https://github.com/chrisdavies/tech-thoughts/blob/master/travis-ci-is-awesome.md)

[Example](https://github.com/chrisdavies/rlite)