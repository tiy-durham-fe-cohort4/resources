# Week 3: DOM

## Lessons

- Review of hangman assignment
- DOM manipulation
- DOM events
- DOM traversal
- Regular expressions
- Building with Gulp
- SCSS

### DOM manipulation

- Getting an element
  - querySelector
  - querySelectorAll
  - getElementById
  - getElementsByTagName
  - getElementsByClassName
- Manipulating an element
  - setAttribute
  - getAttribute
  - hasAttribute
  - removeAttribute
  - className
  - classList (IE 10 and up)
  - attributes
- Create/manipulate HTML
  - innerHTML
  - textContent
  - removeChild
  - replaceChild
  - appendChild
  - insertAdjacentHTML
    - https://developer.mozilla.org/en-US/docs/Web/API/Element.insertAdjacentHTML
  - document.createElement

### DOM Events

- Events
  - addEventListener
  - removeEventListener
  - (attachEvent in older versions of IE)
  - window.onload
  - onclick
  - ondblclick
  - onmousedown
  - onmouseup
  - onmouseover
  - onmouseout
  - onchange
  - window.onbeforeunload
  - onkeydown
  - onkeyup
  - onkeypress (representing typing), String.fromCharCode
  - onfocus
  - onblur
- http://www.w3schools.com/jsref/dom_obj_event.asp

### DOM Traversal

- Traversal
  - childNodes
  - firstChild
  - lastChild
  - nextSibling
  - previousSibling
  - parentNode

### Regular expressions

- string split
- string match
- regex test
- regex exec
- input pattern
- http://html5pattern.com/
- http://www.w3schools.com/jsref/jsref_obj_regexp.asp
- http://codular.com/regex

### Building with Gulp

- Live reload
- Concatenating files (scripts, stylesheets)

### SCSS

- Variables
- Importing
- Mixins

## Exercises

### Flyout Menu

- Create a dropdown menu like this one:
https://dribbble.com/shots/850410-Dropdown-Menu-UI?list=searches&tag=dropdown_menu&offset=0
- It should be hidden by default
- When you click the "Admin Settings" button, the menu should show
- When you click the menu, the button, or the page, the menu should hide

### Widgets

- Create some of the widgets found here
- https://github.com/tiy-durham-fe-2015/curriculum/tree/master/assignments/js-widgets

### REGEX: HTML escaping

- Given a string, replace any unsafe HTML characters with their safe escape sequences
  - < &amp;lt;
  - > &amp;gt;
  - & &amp;amp;
  - " &amp;quot;
  - ' &amp;#39;;

### REGEX: Reading CSV

- Write a function that takes a CSV string and returns a two dimensional array
  - Handle the case where there is a comma in a field (the field is quoted)
  - Handle the case where there is a newline in a field (the field is quoted)

### User management

- Could we come up with a more fun exercise that still achieves this goal?
- https://github.com/tiy-durham-fe-2015/curriculum/tree/master/assignments/user_mgmt

## Reading

- https://github.com/airbnb/javascript
- http://codular.com/regex
