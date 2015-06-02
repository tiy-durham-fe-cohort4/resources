# Midterm

## Know your CSS selectors

If you don't know the difference between these, look em up!

- `.foo`
- `#foo`
- `foo`

And these...

- `.foo.bar`
- `.foo .bar`
- `.foo + .bar`
- `.foo ~ .bar`
- `.foo > .bar`
- `#foo .bar`
- `.foo[name="bar"]`

And these...

- `.foo:hover`
- `.foo:active`
- `.foo:visited`
- `.foo:checked`

---

## Know your CSS rules

- background
- position
- float
- clear
- text-align
- text-transform
- white-space
- word-wrap
- padding
- margin
- top, bottom, right, left
- width
- height
- min-width
- min-height
- max-width
- max-height
- `@media`
- border-radius
- box-sizing
- box-shadow
- `@font-face`
- font
- font-weight
- font-size
- font-style
- line-height
- overflow
- display
- visibility
- transform
- outline
- content
- color
- opacity
- z-index
- transition

---

## CSS Challenge

Write CSS to put the `.container-close` in the top-right corner of the
`.container`.

[![Modal](https://d13yacurqjgara.cloudfront.net/users/6594/screenshots/517407/modal-box.png)](https://dribbble.com/shots/517407)

```css
.container {

}

.container-close {

}
```

---

## CSS Challenge

Write CSS to position the `.profile-pic` on the left side of the `.profile`,
and the `.profile-details` on the right side. The `.profile-name` should be
pinkish or salmon and on top of the `.profile-location`.

If you want to actually build this UI, use your GitHub profile pic or something
and make it happen!

[![Profile](https://d13yacurqjgara.cloudfront.net/users/85668/screenshots/876515/contact_list2.jpg)](https://dribbble.com/shots/876515)

```css
.profile {

}

.profile-pic {

}

.profile-details {

}

.profile-name {

}

.profile-location {

}
```

---

## CSS Challenge

Dashboards are a thing. You'll probably build quite a few in your career.
Here's one from Dribbble.

[![Dashboard](https://d13yacurqjgara.cloudfront.net/users/195330/screenshots/1445036/software-dashboard.png)](https://dribbble.com/shots/1445036)

- How would you position the side nav on the left?
- What happens if it has so many links that it can't fit on the screen?
- How would you make the tabs?
  - (Definition, Influence KPI, Source Mapping, etc)
- How would you make the part with the green header and rows of data?
  - (influencer, type, relation, direction, etc)

---

## JavaScript

## Types

What is the type of each of these:

- `true`
- `32`
- `'hello, world'`
- `{ name: 'Joe', age: 32 }`
- `['a', 'b', 'c']`

---

## Data manipulation

Some customers have been regularly bouncing checks. So, you've been given the
task of removing all the bad customers from the customer list.

```javascript

var bounced = ['un@example.com', 'sally@example.com', 'un@example.com'];

var customers = [{
  email: 'joe@example.com',
  name: 'Joseph'
},{
  email: 'sally@example.com',
  name: 'Sally'
},{
  email: 'j2399@example.com',
  name: 'Jane'
},{
  email: 'un@example.com',
  name: 'Unberton'
}];

// TODO: Write this function, removing any customers that have an email in
// the bounced list
function goodCustomers() {
  return customers.filter(function (customer) {
    return !isInArray(bounced, customer.email);
  });
}

function isInArray(array, value) {
  return array.indexOf(value) > -1;
}

```

---

## Data manipulation

Write a function called repeat that repeats an operation `N` times.

```javascript
function repeat(n, fn) {
  while (n) {
    n--;
    fn();
  }
}

// Logs 'Hi' 5 times
function sayHi () { console.log('Hi'); }
repeat(5, sayHi);

// Adds 4 lis to the ul
repeat(4, function () { $('ul').append('<li />'); });
```

---

## Data manipulation

You've been hired by Trello to help write their new task management app. A task
can be dependent on other tasks, and those tasks can be dependent on other
tasks, too. So, a task might depend on any number of tasks or subtasks in order
to be completed.

You've got to write a function which, when given a task, returns a list of
all other tasks on which the task is dependent.

```javascript

function dependencies(task) {
  // TODO: return an array of task names that task depends on
  // HINT: This is probably most easily done with recursion
}

// This call should log the following array:
// ["Build engine", "SpaceX", "Build capsule", "Boeing design team",
// "Washington beurocrats", "Steel shipment", "China steel co."]
console.log(dependencies({
  name: 'Launch moon rocket',
  dependsOn: [{
    name: 'Build engine',
    dependsOn: [{
      name: 'SpaceX'
    }]
  }, {
    name: 'Build capsule',
    dependsOn: [{
      name: 'Boeing design team'
    }, {
      name: 'Washington beurocrats'
    }, {
      name: 'Steel shipment',
      dependsOn: [{
        name: 'China steel co.'
      }]
    }]
  }]
}));

```

---

## DOM / jQuery

How would you make a UI like this?

- When you click a side-menu option, it becomes selected
- Any previously selected one becomes deselected
- There is a little arrow indicating the selected item
- The content of the page changes based on the selection

[![Selected](https://d13yacurqjgara.cloudfront.net/users/15091/screenshots/591601/mdrbl.png)](https://dribbble.com/shots/591601)

---

## DOM / jQuery

How would you make a UI like this?

Many UIs have widgets that look something like this one. It's got a pane of
content (images and/or text blocks) that you can view one at a time.

You can:

- Click the left arrow to go backward through the content
- Click the right arrow to go forward through the content
- Press the left arrow key on your keyboard to go backward
- Press the right arrow key on your keyboard to go forward

[![Slider](https://d13yacurqjgara.cloudfront.net/users/3375/screenshots/1638223/sero8-dribbble.png)](https://dribbble.com/shots/1638223)

[An example solution](http://jsbin.com/mavasa/2/edit?js,output)

---

## Templating

Use underscore or lodash to show a list of tweets.

```javascript

function showTweets(tweets) {
  // TODO: implement this
}

// Sample usage
drawList([{
  handle: '@dhh',
  tweet: 'How is it the stock widget can take more than half screen but calendar can\'t even show me the two events tomorrow?',
  date: 'May 27'
}, {
  handle: '@jasonfried',
  tweet: 'The purest chronograph. The Heuer Carrera 2447 SN from the mid-60s. https://instagram.com/p/3RggnMv0sy/',
  date: 'May 29'
}]);

```

---

## Routing

Use Backbone's router to create a page that says hello to anyone whose name
is in the URL...

So, going to `#hi/Lynn` would show the HTML: `<h1>Hello, Lynn</h1>` and going
to `#hi/Chance` would show the HTML: `<h1>Hello, Chance</h1>`

A user should be able to type *any* name after the `#hi/` and get the app to
say hello to that name.

If you want to get fancy, turn it into a pretty greeting card and send the
GitHub pages link to a family member: `#hi/Mom`
