# User Management

## Description

Nearly every application you will ever write will have some kind of user management.

We've already worked on it a bit in class. Now, we're going to refine it.

## Objectives

### Learning Objectives

After completing this assignment, you should...

* Understand the basics of array manipulation
* Understand the basics of variables, properties, and methods
* Understand the basic use cases of Git for multi-developer projects
* Understand how to use jQuery to listen for events and manipulate the DOM
* Understand how to store and load data from localStorage

### Performance Objectives

After completing this assignment, you should be able to effectively...

* Program using arrays, objects, strings, and numbers

## Details

### Deliverables

* A repository named "user_mgmt"
* A UI that allows you to dynamically add users to a list

### Requirements

## Normal Mode

- Create a form with first name, last name, and email fields
- When the form is submitted, add the user to a list on the screen

[Video demo](https://www.youtube.com/watch?v=wiAyemxpHkw&feature=youtu.be)

## Hard Mode

- Add the ability to remove a user (by clicking an X in the UI list)
- Sort all users alphabetically by full-name
- Add a sort dropdown with the options 'a-z' and 'z-a'
- When the user changes the value of this dropdown, the list of users should change their sort order

Hint: It's useful to store the users as objects in an array:

```javascript
[{
  firstName: 'Joe',
  lastName: 'Shmo',
  email: 'js@example.com'
}]
```

And then use that array to render the user list as HTML.

## Nightmare Mode

- Add a search box
- When the user types in the search box, dynamically change the users list to show only those users that match the search term
  - search across first name, last name, and email
- Persist the users using `localStorage`
- Load the users from `localStorage` when the page loads
- Add form validation
