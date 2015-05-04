class: center, middle

# Programming 101

---

## Variables

- Are named values
- You can change the value of a variable
- Rule of substitution (where you see the variable name, you can substitute its value)

    // Declare a variable x
    var x;

    // Assign a value to x
    x = 4;

    // Declare and assign variable y
    var y = 33;

---

## Strings

- How text is represented in JavaScript
- `var message = 'Hello, class!';`
- Declares a variable which points to the text: "Hello, class!"
- Strings begin and end with a single tick ' or a double tick "

---

## Functions

- A function is a named block of statements
- When you call the function, the statements run
- Can be passed inputs, can produce outputs

    // Define / declare function hello
    function hello(firstName, lastName) {
      var message = 'Hello, ' + firstName + ' ' + lastName;
      console.log(message);
      alert(message);
    }

- The code above
  - Declared a function named hello
  - Takes two arguments called `firstName` and `lastName`
  - Creates a local variable to store the hello message
  - Logs the message to the console
  - Alerts the message
  - But this code doesn't actually do anything until the function is called!

---

## Calling / invoking a function

    hello('Chris', 'Davies');
    hello('Kelly', 'Murray');

- Invoke a function by typing its name followed by parenthesis
- Arguments to a function go in the parenthesis
- If multiple arguments, separate them by commas
- Each time the function is called, the statements in the function block are executed

---

## Loops

- Allow you to run a block of code multiple times
- Come in several variants
  - for (this is by far the most common)
  - while
  - do while

---

## For loops

- Generally are used to loop a specific number of times

    for (var i = 0; i < 30; ++i) {
      console.log(i);
    }

- This is how a for loop usually looks
- `i` is a loop variable, common loop variable names are `i, j, x, y`
- It is declared `var i = 0;`
- Next, is a condition which is checked each time through the loop `i < 30;`
  - This is saying, "If i is less than 30, run the code in the block"
- Finally, at the end of each iteration, we increment i `++i`
  - `++i` is a quick way to add one to i
  - `i = i + 1` is another way

---

## While loops

- Less common than for, but still useful
- Generally used when you don't know the exact number of iterations needed

    var i = 0;
    while (i < 30) {
      console.log(i);
      ++i;
    }

- Does the exact same thing as the previous for loop

---

## Do while

    var i = 0;
    do {
      console.log(i);
      ++i;
    } while (i < 0)

- This will actually execute, because the block of code always executes once
- Rarely used, but good to know

---

## Math

- Add `1 + 2`
- Subtract `1 - 2`
- Negate `-3`
- Divide `4 / 2`
- Multiply `4 * 2`
- Mod `4 % 2` yields the remainder (0, in this case)
- Get random number
  - Between 0 (inclusive) and 1 (exclusive) `Math.random()`
  - Beween 1 and 10 (inclusive) `Math.floor(Math.random() * 10) + 1`
- [Math reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

---

## Canvas 2d context API

- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D#Paths)
