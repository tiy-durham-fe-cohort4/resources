# JS Fonts

## Description

I've put together a dataset containing some metadata about common fonts.

I got the data from [this handy site](http://www.cssfontstack.com/).

Your job is to use JavaScript to calculate some statistics about these fonts,
and also to render them as HTML!

## Objectives

### Learning Objectives

After completing this assignment, you should understand...

* The array map, filter, reduce, and forEach methods
* Have a deeper understanding of hashes

## Resources

- [The font dataset](https://github.com/tiy-durham-fe-cohort4/resources/blob/master/datasets/fonts.js)

## Details

### Deliverables

* A GitHub project called "js-fonts"

## Normal Mode (MVP)

- Use the array `reduce` method to calculate the average Mac and Win support
across all fonts.
- Use the array `filter` method to get only those fonts that have a 90% or
higher Mac *and* Win support
- Use the array `map` method to convert the list of fonts into a string of
HTML. An example of the HTML you might want to produce is as follows:

```

<li>
  <span class="family">Arial (sans-serif)</span>
  <span class="stats">
    <span class="win"><em>Windows</em> 99.84%</span>
    <span class="mac"><em>Mac</em> 98.74%</span>
  </span>
</li>
<li>
  <span class="family">Arial Black (sans-serif)</span>
  <span class="stats">
    <span class="win"><em>Windows</em> 98.08%</span>
    <span class="mac"><em>Mac</em> 96.22%</span>
  </span>
</li>

...etc

```

- Use `innerHTML` or `insertAdjacentHTML` to stick your generated HTML into
the DOM
- Style it!!!

## Hard Mode

- Display the stats that you calculated in normal mode
- When the user clicks a font, change the page (or a preview panel) to use that
font family
- Allow the user to enter in a mac percentage e.g. `90.5` and a PC percentage,
then narrow down the fonts that are displayed to only show fonts that meet those
minimum percentages
- Generate a list of checkboxes for the various types of fonts (serif, sans-serif, monospaced, etc).
  - When the user checks one or more checkboxes, show only the fonts that
  match the checked font types
