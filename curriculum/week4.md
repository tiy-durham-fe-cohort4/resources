# Week 4: Libraries n stuff

## Lessons

- Review of weekend assignment
- jQuery
- Lodash
- MVC
- Ajax
- Routing
- Design principles
- Thinking like a dev

### jQuery

- Selecting elements
- Navigating up and down the DOM tree
- Event handling
  - Direct handlers (e.g. .click)
  - Indirect handlers (e.g. .on)

### Lodash

- Introduction to templates
- Looping
- Conditionals
- Partials
- Master pages
- https://github.com/tiy-durham-fe-2015/curriculum/blob/master/tuts/05-lodash-templates-tut.md

### MVC

- Model: basic data
- View: the HTML / template
- Controller: the glue layer
- Services
- Components
- Importance of namespaces
- File organization

### AJAX

- CORS
- JSONP
- jQuery
- XMLHttpRequest (alite)

### Routing

- Rlite
- Backbone

### Design principles

- Not sure what should go here, but worst-case, pull from my reading project:
  - Borders
  - Fonts
    - Sizing
    - Line-height
    - Line-length
  - Padding and margins
  - Colors

### Thinking like a dev

- Analyze a few sites and discuss how they might have been built
- Break problems down into clear steps
- Group at same level of abstraction

## Exercises

- Make a sliding, paginated SPA
  - Click a "next" link or whatevz, and the next page slides in from the right
  - Click a "back" link and the prev page slides in from the left

- Appointments app (paired)
  - Need to consider writing a back-end for this so they can get reps on AJAX
  - https://github.com/tiy-durham-fe-2015/curriculum/tree/master/assignments/appointments
  - Add/remove/edit appointments w/ city, state location
  - Show weather for the appointment in deets screen
  - Show weather for appointments on list screen
  - Might want to use moment for dates
    - http://momentjs.com/
  - Google's location API
  - Weather map API
    - You can find any weather API you want to use, but I'm going to suggest:
      - http://openweathermap.org/
    - Current weather:
      - http://api.openweathermap.org/data/2.5/weather?q=Durham,nc
    - Forecast
      - http://api.openweathermap.org/data/2.5/forecast?q=Durham,nc

## Reading

- Lodash templates:  https://github.com/tiy-durham-fe-2015/curriculum/blob/master/tuts/05-lodash-templates-tut.md

- AJAX with jQuery: https://learn.jquery.com/ajax/

- AJAX with raw browser objects: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest
