class: center, middle, inverse

# Forms

---

# How do you get data from a user?

Forms

---

# What kind of fields are standard/common?

- input type=textbox - a short amount of text
- textarea - a big block of text
- input type=checkbox - you can check multiple checkboxes in a group
- input type=radio - you can only select one in a group
- input type=password - enter text without displaying it
- file - a file chooser
- select - a dropdown list of choices

[Some examples](http://jsbin.com/yohelu/2/edit?html,output)

---

# How does data flow to/from a server?

- User enters in a URL into the browser's nav-bar
  - e.g. http://example.com
- Browser sends an HTTP GET request to the `example.com` servers
- `example.com` replies with HTML (or whatevz)
- Browser parses the HTML and downloads any assets it refers to
  - e.g. CSS, JavaScript, images, fonts, favicon
  - (Note: Depending on the size, number, and kind of assets, this impedes performance, and time-to-render)
- User fills out a form and clicks submit
- Browser sends an HTTP POST, PUT, GET, or DELETE to the server
  - Sends the user's input values along with it
- Server processes request, and responds
  - Often with a redirect, if the submit was successful

---

# HTTP Verbs

When it comes time to communicate with a server using HTTP (the usual protocol
  of the web), you can choose one of these verbs:

- GET - get data (should not perform any writes or destructive stuff on the server)
- POST - tell the server you want to create new record(s)
- PUT - tell the server you want to update a record
- DELETE - tell the server you want to delete a record

Technically, the server can do whatever it wants. It could do a delete operation
when you POST, and it could to an update when you send it DELETE, but that'd be
a really poorly written server...

---

# Putting it together with a form

```html
<form method="POST" action="/login">
  <input type="text" name="username">
  <input type="password" name="pass">
  <button>Submit</button>
</form>
```

This form will:

- perform an HTTP POST when submitted.
- if the user was at http://example.com
  - this would POST to http://example.com/login
- the field names matter!
  - server expects name/value pairs that it understands

---

# Styling

Styling forms can be a real pain (and will be covered in depth elsewhere).

But note that some elements cannot be directly styled.

And form inputs don't inherit their font-size properly.

[Demo](http://jsbin.com/liqodo/2/edit?html,css,output)

---

# Labels

There is a special element `<label>` which is used to label a form field.

When clicked, it activates the form field it is associated with.

[Demo](http://jsbin.com/dikepa/1/edit)

---

# Autofocus

Often, there is a logical starting point to a form, and you want it to have
focus whenever the user navigates to that page.

This can be done by giving an element the `autofocus` attribute:

```html
<input type="text" autofocus>
```

---

# Validation

Validation is a *huge* topic, so we'll just introduce it here.

You should visually indicate to a user whether or not a field is valid.

[CSS tricks demo](https://css-tricks.com/almanac/selectors/v/valid/)

More advanced techniques will be covered when we get to JavaScript!

---

# Questions?
