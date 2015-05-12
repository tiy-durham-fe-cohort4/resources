# Conditionals

How do you run some code only if something is true?

Conditionals.

---

```function

    if (someCondition) {
      console.log('It was true!');
    } else if (someOtherCondition) {
      console.log('Other was true!');
    } else {
      console.log('Nothing was true :/');
    }
```

---

## Booleans

Booleans are types that can be either true or false

- true
- false

---

## Operators

```
== `'2' == 2` is true
=== `'2' === 2` is false
!= `'2' != 2` is false
!== `'2' !== 2` is true
>
<
>=
<=
&&
||
```

---

## An example

```javascript

    function logIf(condition, message) {
      if (condition) {
        console.log(message);
      }
    }

    var arr = [3, 34, 54];

    logIf(true, 'Hello');
    logIf(true && false, 'Not logged!');
    logIf(arr.length > 10 || arr.length === 0, 'Whaaat?')

```

---

## Shortcuts!!!

You can do something nifty like this:

```javascript

    // Only logs 'Shazam!' if arr.length > 10
    arr.length > 10 && console.log('Shazam!');

    // Only logs 'Wut wut!' if arr.length is falsy (e.g. 0)
    arr.length || console.log('Wut wut!');

```

---

## Default values n stuff

```javascript

    function sayHi(name) {
      if (!name) {
        name = 'Joe';
      }

      console.log('Hi, ' + name);
    }

    sayHi(); // says 'Hi, Joe'
    sayHi('Jane'); // says 'Hi, Jane'

```

---

## Default values n stuff (contd)

```javascript

    function sayHi(name) {
      name = name || 'Joe';
      console.log('Hi, ' + name);
    }

    sayHi(); // says 'Hi, Joe'
    sayHi('Jane'); // says 'Hi, Jane'

```
