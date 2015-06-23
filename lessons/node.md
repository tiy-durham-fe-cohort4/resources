class: center, middle, inverse

# Node

---

## What is it?

- Back-end in JavaScript
- Create your own API
- Create your own full-stack web app

---

## Why should you learn it?

- It's really valuable to be a full-stack developer
- Understanding back-end makes you better all-around

---

## Diagram 3-tier web architecture

- Client
- Server
- Database

---

## Using Node with Express

- First: `npm init`
- Then: `npm install --save expressjs`
- Open your editor
- Add `.gitignore` and put `node_modules` in there
- Add `init.js` and make it look like...

---

## Hello world with express

```javascript

var express = require('express');
var app = express();

// Routing, but this time on the server
app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Starting our router/applicatin listening on port 3000
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

```

---

## Run the whole thing

- `node init.js`

---

## Sending back JSON

```javascript
app.get('/', function (req, res) {
  res.json({ name: 'Joe', age: 50 });
});
```

---

## Sending back errors

```javascript
app.get('/', function (req, res) {
  res.status(400).json({ message: errs.message || 'Invalid request' });
});
```

---

# Common status codes:

- 200 - OK (the default)
- 301 - Moved permanently (used for redirect)
- 404 - Not found
- 400 - Bad request
- 401 - Unauthorized
- 403 - Forbidden
- 500 - Internal server error

---

## Handling other HTTP events

```javascript
app.get('/things', getAllTehThings);
app.post('/things', createThing);
app.put('/things/:id', upsertThings);
app.delete('/things/:id', deleteThing);
app.patch('/things/:id', partialUpdateThing);
```

---

## Processing input from the URL and/or body of the request

```javascript
app.put('/things/:id', function (req, res) {
  // req is the request object, and params contains the URL parameters
  // req.query.foo would give you the "shtuff" if the URL was /things/324?baz=bar&foo=shtuff
  var thingId = req.params.id;
  
  // Get the thing that was sent with the PUT request. Usually, this is 
  // the JSON that was sent:
  var thing = req.body;
  
  // TODO: store thing somewhere
  res.json(thing);
});
```

--- 

## Handling JSON requests

When we initialize our express app, we need to tell it to handle JSON requests.

```javascript
var bodyParser = require('body-parser');

// Parse application/json requests properly
app.use(bodyParser.json());
```

---

## Serving files in addition to API calls

```javascript
// Specify the place where public files are found
app.use(express.static(__dirname + '/../dist'));
```

---

## Let's build a chat app in class

- Simple form
- API that accepts a basic message
- Front-end that polls
- No crazy, fancy gulp or browserify

---

## Deploying to Heroku

- Sign up for Heroku
- [Download their commandline tools](https://toolbelt.heroku.com/)
- In terminal, type `heroku login` and follow the prompts
- Modify `package.json` to have a script that looks something like:

```javascript
"scripts": {
    "start": "node init.js",
}
```

- Listen on the HEROKU port

```javascript
var server = app.listen(process.env.PORT || 3000);
```

- Run `herkou create`
- Deploy to heroku: `git push heroku master`

[Read more here](https://devcenter.heroku.com/articles/node-best-practices)
[And here](https://devcenter.heroku.com/articles/git)

---

## Splitting your controllers up

It's generally a bad idea to put all of your routes and application logic in one place...

```javascript
var requireDir = require('require-dir');

// Require the API controllers
requireDir('./controllers', { recurse: true });
```

Each controller will need to require the app, so the app itself should go in its own file, too.

---

## Database(s)

We don't generally want to store all of our data in memory...

- If the server goes down or gets redeployed, we lose everything
- Each server would have its own state, so we wouldn't be able to scale out multiple servers

Instead, we store our data in databases. There are *many* options. We'll use Mongo or NEDB.

---

## Mongo

- Plays nice with Node
- Pretty simple to get up and running
- Does require running a server or connecting to an existing one
- [Brief intro](http://howtonode.org/node-js-and-mongodb-getting-started-with-mongojs)
- [Official docs](https://mongodb.github.io/node-mongodb-native/api-articles/nodekoarticle1.html)

---

## NEDB

- Very similar to Mongo
- Doesn't require installation
- Doesn't scale, but is a good way to get some familiarity w/ databases without the pain of setup
- Can persist to disk, but defaults to in-memory
- [Official docs](https://github.com/louischatriot/nedb)

---

## An NEDB example

```javascript
var Datastore = require('nedb');

var users = new Datastore();

users.insert({ name: 'Sally', age: 45 }, function (err, user) {
  if (err) {
    // Didn't work!
  } else {
    // Worked... do something with the user object
  }
});

```

---

## Avoiding callback hell

- All NEDB/Mongo operations work the same way
- Use a callback method to detect whether the call succeeded/failed
- I like to turn these into promises instead (see reshare for an example)

---

## DB methods

```javascript
db.insert // creates a new record
db.update // updates a record
db.find // finds one or more records
db.findOne // finds a single record
db.remove // removes a record
```

Read the docs for deets!

---

## Validation

[express-validator](https://github.com/ctavan/express-validator) seems pretty popular.

I like [fluent-validator](https://www.npmjs.com/package/fluent-validator) much more:

```javascript
var validator = require('fluent-validator');

function validateThing(thing) {
  validator()
    .validate(thing.name).matches(/\w+\s+\w+/)
    .validate(thing.email).isEmail().or.isEmpty()
    .throwOnError();
}
```

---

## Authentication

A big topic. Everyauth is by far the most popular package.

See reshare for sample usage.
