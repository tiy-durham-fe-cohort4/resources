# Memory Game Layout

## Description

This is an old-school game. The goal is to find all matching tiles. We'll
actually implement this game later in the cohort. But for now, we're just going
to lay the game board out.

Here's the final project (working with JavaScript, so don't worry about that.... this is just for a point of reference): http://chrisdavies.github.io/memory/

## Objectives

### Learning Objectives (Front End)

After completing this assignment, you should...

* Understand positioning
* Understand custom form element styling
* Understand how to maintain a grid's aspect ratio

## Resources

This uses animations (if you do the stretch-goals), so here are some handy
tools around animations:

* http://ianlunn.github.io/Hover/
* http://daneden.github.io/animate.css/
* http://www.justinaguilar.com/animations/index.html
* http://leaverou.github.io/animatable/

And here is the CSS-tricks article about it:
https://css-tricks.com/almanac/properties/a/animation/

## Details

### Deliverables

* A GitHub project called "memory-layout"
* A GitHub page that looks like the one shown here:
![here](https://github.com/tiy-durham-fe-2015/curriculum/raw/master/img/memory-gameboard.gif)
* When you click a tile, it should flip
* When you click it again, it should flip back

## Normal Mode (MVP)

* Get the page to display as shown in the image
* In the title, display a lightbulb instead of the o in the word "Memory"
* Use a web-font for the header
  * I used the Google font Orbitron: http://fonts.googleapis.com/css?family=Orbitron
* Use an icon font for the tiles (and for the lightbulb in the header)
  * There should be at least 16 icons in it
  * I built mine using: http://fontastic.me/
* Display lives remaining as a band of hearts as in the image
* Just hard-code the time into your HTML:

    <span class="game__time">2:10</span>

* Add a "new-game.html" page which displays something like this:

![new game](https://github.com/tiy-durham-fe-2015/curriculum/raw/master/img/memory-new-game.gif)

* Note the animated background colors and foreground positioning
  * I used [this](http://www.justinaguilar.com/animations/index.html) to help get my animations started, but animations are a stretch-goal
* Note the hover effects on the buttons
* When you click easy or hard, it should take you to the game board screen

## Hard Mode

* Add animations
* Add background music

## Nightmare Mode

Create another GitHub project called "keastees"

Implement this layout (stolen from Matt Keas):

![toggle](https://github.com/tiy-durham-fe-2015/curriculum/raw/master/img/tshirts.gif)

* The flyout menus should be triggered by a mouse hover
