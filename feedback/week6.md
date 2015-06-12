# Week 6 feedback

This includes some feedback from week 4 which I had neglected to send!

## Binding events over and over again

This code:

```javascript
app.router.route('appointments/new', function () {
  app.show('new-appt-template', new app.Appointment());

  $('body').on('submit', '.new-appt-form', function (e) {
    e.preventDefault();

    // This handler gets bound to body every single time the appointments/new
    // route is matched.
  });
});
```

Given that code, the first time the `appointments/new` route runs, we add a
submit event listener to the body. The next time `appointments/new` runs, we
add a second submit event listener to the body, etc. We are never un-binding 
events from the body, which is a big problem!

```javascript
app.router.route('appointments/new', function () {
  app.show('new-appt-template', new app.Appointment());

  $('.new-appt-form').on('submit', function (e) {
    e.preventDefault();

    // Assuming new-appt-form gets blown away and redrawn every time we
    // generate the new-appt-template, then this event handler will get
    // blown away and recreated each time, too, so no more duplicate 
    // event handlers! Winning!
  });
});
```

## Globals vs locals

Any data that needs to be shared between screens needs to be stored somewhere
globally:

- A global variable
- Local storage
- A remote storage (API or whatever)

Problem:

```javascript
app.router.route('appointments/new', function () {
  var appts = []; // This is only available to this function
});
```

Solution:

```javascript
app.router.route('appointments/new', function () {
  // appts is now pointing to a globally available array, so modifications
  // to appts will be visible to other parts of the app
  var appts = app.appts;
});
```

## Variables in if statements

Here's some code that I saw in the Etsy app. It worked, which is awesome. But it could 
be done with a bit less code.

```javascript
  listings: function (args) {
    args = args || {};

    if(!(args.keywords)) {
      var keywordsQuery = '';
    }else {
      var keywordsQuery = ('&keywords=' + encodeURIComponent(args.keywords));
    }

    if(!(args.min)) {
      var minQuery = '';
    }else {
      var minQuery = ('&min_price=' + args.min);
    }

    if(!(args.max)) {
      var maxQuery = '';
    }else {
      var maxQuery = ('&max_price=' + args.max);
    }

    var url = this.baseUrl + '/listings/active.js?includes=MainImage' + keywordsQuery + minQuery + maxQuery + '&api_key=' + this.apiKey + '&callback=?';
    return this.fetchUrl(url);
  }
```

A few points.

Declaring the same variable in an if and also in the else makes the code a little hard to read. So this:

```javascript
if(!(args.keywords)) {
  var keywordsQuery = '';
}else {
  var keywordsQuery = ('&keywords=' + encodeURIComponent(args.keywords));
}
```

Would be better written like this:

```javascript
// Variable declarations are almos always better off being done first thing in a function,
// rather than somewhere down in the belly of the function.
var keywordsQuery = '';

if (args.keywords) {
  keywordsQuery = ('&keywords=' + encodeURIComponent(args.keywords));
}
```

It could also be written like this:

```javascript
var keywordsQuery = args.keywords ? ('&keywords=' + encodeURIComponent(args.keywords)) : '';
```

So, a full refactoring of the previous function could look like this, which is quite a bit shorter:

```javascript
  listings: function (args) {
    args = args || {};

    var keywordsQuery = args.keywords ? ('&keywords=' + encodeURIComponent(args.keywords)) : '';
    var minQuery = args.min ? ('&min_price=' + args.min) : '';
    var maxQuery = args.max ? ('&max_price=' + args.max) : '';
    var url = this.baseUrl + '/listings/active.js?includes=MainImage' + keywordsQuery + minQuery + maxQuery + '&api_key=' + this.apiKey + '&callback=?';
    
    return this.fetchUrl(url);
  }
```

If we wanted to go further, we could create a URL building helper function:

```javascript
function buildQuery(hash) {
  return _.pairs(hash)
    .map(function (pair) { 
      return pair.map(encodeURIComponent).join('='); 
    })
    .join('&');
}
```

And then our listings function could look like this:

```javascript
  listings: function (args) {
    args = args || {};

    var url = this.baseUrl + '/listings/active.js?' + buildQuery({
      includes: 'MainImage',
      keywords: args.keywords,
      min_price: args.min,
      max_price: args.max,
      api_key: this.apiKey,
      callback: '?'
    });
    
    return this.fetchUrl(url);
  }
```

Here's a walkthrough of what `buildQuery` is doing:

```javascript
// Turns a hash into a URL query string, so this hash: { q: 'what', max_price: '50' }
// becomes this string: "q=what&max_price=50", and each key/value is encoded to be 
// safely represented in a URL 
function buildQuery(hash) {
  // _.pairs is an underscore function that takes a hash: { q: 'what', max_price: '50' }
  // and returns an array of arrays: [['q', 'what'], ['max_price', '50']]
  return _.pairs(hash)
    // Then, we map each value in the array to a string, so after this mapping
    // function is done, the previous array will have been turned into this:
    // ['q=what', 'max_price=50']
    .map(function (pair) { 
      // If pair was something like ['q', 'what'], we will encodeURIComponent on 
      // each value, then join them using '=', so it becomes 'q=what'
      return pair.map(encodeURIComponent).join('='); 
    })
    // Finally, we take that array, and we join it on '&' so that the entire thing
    // becomes: 'q=what&max_price=50' which is a nice, safe query-string 
    .join('&');
}
```