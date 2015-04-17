# Week 2: JavaScript 101

## Lessons

- Introduction to programming
- Control flow
- Strings, arrays and hashes
- Objects
- DOM elements, manipulation, and events
- Thinking like a programmer
- Scope and organization
- JavaScript gotchas
- Debugging

### Introduction to programming

- Variables
- Types
  - string
  - number (ints and floats)
  - boolean
  - object literals
  - ...
- Comments
- Objects (basic, literals)
  - Property/method accessors via .
- Functions and methods
  - Composed method pattern
  - arguments
  - return
  - declaring
  - calling/invoking
- Operators
- Timers: setTimeout (don't use setInterval)

### Control flow

- if, else
- for
- continue
- for in
- while
- do/while
- ternary: `isTrue ? 'Yes' : 'No'`
- short-circuited statements

    function say (something) {
      // If something is falsy, then we'll make it 'Hello'
      something = something || 'Hello';
      alert('Someone says: ' + something);
    }

    function fullName (usePrefix) {
      // A short way to only run the processPrefix function if
      // usePrefix is truthy
      usePrefix && processPrefix();

      processName();
    }

- ternary: isTrue ? 'Yes' : 'No';
- short-circuiting
- var isMyShirtRed = false;
- var result = (!isMyShirtRed && "it's actually salmon") || "yey for red";
- value = value || 'default';

### Debugging

- Inspecting state with browser console
- Errors in the console
- Breakpoints and stepping through
- Google + StackOverflow

### Objects

- What is an object?
- Literal syntax
- Prototypal inheritance
- this pitfalls
- Nice builtins
  - Date
  - Math
    - max
    - rand
    - min

### Strings, arrays and hashes

- What is an array?
- What is a hash?
- Most commonly used array properties/methods
- Most commonly used string properties/methods
- Exercises from here  https://github.com/tiy-durham-fe-2015/curriculum/blob/master/lectures/week3/1-monday-3.md

### DOM elements, manipulation, and events

- What is the DOM
- Getting elements
- Updating elements
- Handling events

### JavaScript gotchas

- strict mode
- Reserved words
  -  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords
- Semicolon insertion
  - http://bonsaiden.github.io/JavaScript-Garden/#core.semicolon
- Exceptions
  - try/catch/finally
  - Error

### Thinking like a programmer

- Understand the problem
- Break it down into steps
  - Break complex steps into steps, etc
- Identify patterns
- Separate concerns
- Single responsibility principle
- Code to an abstraction
- MVP: Ship, ship, ship

## Exercises

- Cowsay

- Build an interface that lets the user create a card

- Simple calculator
  - https://github.com/tiy-durham-fe-2015/curriculum/blob/master/lectures/week2/week-02-2-jan-21.md

- Number guessing game
  - https://github.com/tiy-durham-fe-2015/curriculum/blob/master/lectures/week2/week-02-2-jan-21.md

- 1 or 2 coderbyte exercises

- Basic logic challenges https://github.com/TIY-Houston-Front-End-Engineering/Notes-Sept-2014/blob/master/examples/day08/hw08.js

- Use for and forEach to...
  - Calculate the sum of numbers in an array
  - Find the biggest date in an array
  - Calculate the average of numbers in an array
  - Find all users in an array whose names begin with 'K'
    - Extract their names
    - Sort the resulting list

- The color clock
  - http://thecolourclock.co.uk/

- Implement Lodash(ish) methods
  - https://github.com/TIY-Houston-Front-End-Engineering/Notes-Sept-2014/blob/master/day13.md

- Weekend: hangman game
  - https://github.com/tiy-durham-fe-2015/hangman

## Reading

- Learn JS by playing a game http://www.jsdares.com/
- Read about semicolon insertion issues
- http://codebetter.com/jeremymiller/2006/12/03/composed-method-pattern/  
- http://learnxinyminutes.com/docs/javascript/
- http://bonsaiden.github.io/JavaScript-Garden/
