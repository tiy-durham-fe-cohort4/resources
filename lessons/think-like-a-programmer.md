class: center, middle, inverse

# Think like a programmer

---

class: center, middle

> A designer knows he has reached perfection not when there is nothing left to
  add, but when there is nothing left to remove.

~ Antoine de Saint Exupery

---

# Principles

- Single responsibility
- Composition from abstract to concrete
- Separation of concerns

---

## Single responsibility

- A function or object should have only one responsibility
- Test this by asking, "What does this function do?"
- If the answer has conjunctions in it, break the function up

---

## Bad example

```javascript

    function makePeeps(searchTerm, users) {
      var matches = users.filter(function (u) {
        return ~u.name.indexOf(searchTerm);
      });

      var html = '';
      for (var i = 0; i < matches.length; ++i) {
        var u = matches[i];
        html += '<li>' +
          u.name.replace('<', '&lt;').replace('>', '&gt;') +
          '</li>';
      }

      document.getElementById('users-list').innerHTML = html;
    }

```

???

- Filters users based on a search term
- Loops
- Sort of escapes strings
- Builds HTML
- Appends to users-list

---

## Refactoring plan

- Filter before calling `makePeeps`
- Get rid of loops
- Move string escaping to a utility function
- User list to HTML as a function
- Setting innerHTML in its own function

---

## V2

```javascript

    // Assumes users are already filtered as desired
    function makePeeps(users) {
      return users.map(function (u) {
        return '<li>' + escapeHtml(u.name) + '</li>';
      });
    }

```

Some might argue this still has too many responsibilities.

Could be broken down further:

```javascript

    function makePeeps(users) {
      return users.map(getName).map(escapeHtml).map(wrap('li'));`
    }

```

---

## Composition from abstract to concrete

```javascript

    function generateTickets(records) {
      var users = readUsers(records);
      return buildTicketsHTML(users)
    }

    function readUsers(records) {
      return parseCsv(records)
        .map(validateUserRecord)
        .map(csvRecordToUser);
    }

    function validateUserRecord(record) {
      if (record.length < 3) {
        console.error('Invalid record: ', record);
        throw new Error('Record should have at least 3')
      }

      return record;
    }

    function mapRecordToUser(record) {
      return {
        firstName: record[0],
        lastName: record[1],
        age: record[2]
      };
    }

    // etc...

```

---

## Separation of concerns

A riff on the single responsibility principle.

Identify concerns, and put them in their own function/module/file.

For instance, if you have a function that parses user records from a CSV,
then renders the users to HTML using a custom template, you have too many
concerns.

There should be at least these modules:

- CSV parsing
- Map CSV record to user
- HTML generation from template template + object
- Glue-layer to compose these functions into the desired result

---

class: center, middle

> Don't make a big program when a small one will do. - Jon Bentley

---

## Process

- Problem definition
- Algorithm design
- Data structure selection

---

## Problem definition

- What does the customer *really* want?
  - They often ask for the wrong thing
  - Challenge assumptions
- What are the requirements?
- What does MVP (minimum viable product) look like?

---

## Algorithm design

Thinking is the most important part of programming. So stop and make time to
think.

- Stop and think (don't jump into code)
- What buliding blocks could solve the problem?
- What is the step-by-step process involved?
- What alternative approaches are there?
- Pseudocode it

---

## Example

Spell checker

- lowercase string
- split string into words
- strip punctuation
- sort
- unique
- select all not in dictionary
- print to output

---

## Choose your data-structures

Solutions often naturally fall out of properly modeled data. Poorly modeled
data leads to complex and buggy solutions.

Let the data structure the program.

---

## Example

Given the spellchecking program mentioned above,

- Input is a string
- Break string into an array
- Represent dictionary as a hash
- Output is an array

---

class: center, middle

> Everything should be made as simple as possible, but no simpler. - Einstein

---

## Before writing code...

Understand your inputs, outputs, and in-between states

---

## Featurecide

Are there features of your app which are unimportant or unecessary? Get rid of
them. Welcome any opportunity to simplify and shrink a system.

- Increases maintainability
- Often increases usability
- Can lead to perf improvements

---

## Learn and grow

Reflect on old projects.

- What were the big challenges?
- How might they have been avoided?
- What could have been done better?
- How could the code be better organized?
- How could the application be better structured?
- How could usability be improved?

---

## Get better at estimating

Envelope calculations should be done to understand the rough complexity and
performance of a system before writing it. These should be doubled or
quadrupled to account for ignorance.

Practice such estimates, possibly use as interview questions:

- How long would it take to walk to DC?
- How many barrells of oil does it take to run a 100W bulb for a year?
- How many blades of grass are there in a square yard of lawn?
- A fisherman claims to pull in 200lbs of lobster per day. Do you believe him?

---

## Principles

- Work on the right problem.
- Explore the design space of possible solutions
- Look at the data
- Use "back of the envelope" calculations
- Component-based design
- Prototype
- Keep it simple

---

class: center, middle

> The best design is usually the simplest. - Jon Bentley

---

## Source

Programming Pearls by Jon Bentley
