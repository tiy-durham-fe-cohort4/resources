# Flags

## Description

Your mission, if you wish to accept it is to use JavaScript and canvas to
create flags of various countries you've visited... Or that you'd like to
visit.

For a good exercise using loops to perform repetition, make the USA flag.

For a real challenge, check out Wales:

![Welsh Flag](http://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Wales_2.svg/500px-Flag_of_Wales_2.svg.png)

## Objectives

### Learning Objectives

After completing this assignment, you should understand...

* Basic functions
* Loops
* Variables
* Logical sequencing

## Resources

This uses canvas, so in your HTML, you'll want something like this:

    <canvas width="800" height="800">
    </canvas>

And in your JavaScript something like this at the top:

    // Canvas context
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');

    // Fix a stupid context bug that blurs
    // the pixels
    ctx.translate(0.5, 0.5);

Here's the canvas context reference:

- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D

And there are lots and lots of resources out there... Google is your friend!

## Details

### Deliverables

* A GitHub project called "flags"
* It should have at least one flag!

## Normal Mode (MVP)

* Get the page to display a flag

## Hard Mode

Do some or any of the following

* Add a more difficult flag (like India's or Wales')
* Use the `setTimeout` function to animate the flag
  - Or create a processing indicator or some other nifty animated thing
  - Why shouldn't you use `setInterval`?
* Try using mouse or keyboard events in JavaScript to
  - move items around when the user moves her mouse
  - move items around when the user presses arrow keys
  - zoom in when the user presses `+` or `-`
