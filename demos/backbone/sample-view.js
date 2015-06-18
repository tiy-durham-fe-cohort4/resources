var UserView = Backbone.View.extend({

  // Built-in: The name of the element that will be put into the DOM to represent a user
  // this is optional, and will default to div
  tagName:  'li',
  
  // If el was specified instead of tag-name, then this view would bind to an existing
  // element that matches the specified selector
  // el: '.user',
  
  // Built-in: The value of class that will be added to the DOM element, also optional
  className: 'user list-item',
  
  // Built-in: Add any other attributes you might want
  attributes: {
    'data-foo': 'Some value'
  },

  // Custom: Generally, we want a template assoicated with a view, so it's common 
  // to add it as a property like so:
  template: _.template('<span class="user-name"><%- m.name %></span><button class="remove">X</button>', { variable: 'm' }),

  // Built-in: Add events to the view. These are scoped to only handle events occurring
  // inside of this view's element, which is handy!
  events: {
    'click .remove': 'removeUser',
    'dblclick': 'showUserDetail'
  },

  // Built-in: called any time a new view is created, can also be declared like so:
  // function (options) {, where options is the options object that was passed to the
  // view's constructor. (e.g. new UserView({ title: 'Show User' }))
  initialize: function () {
    // Watch for any changes to the model, and re-render. The listenTo method
    // is a handy way for a view to detect changes in an object.
    // This assumes that the constructor was called like this:
    // new UserView({ model: someUserModel });
    this.listenTo(this.model, 'all', this.render);
  },

  // Built-in: Re-render the title of the todo item.
  render: function () {
    // The $el property is a jQuery object representing this view's root element
    // (the li in this case).
    this.$el.html(this.template(this.model.toJSON()));
    return this; // Pretty common to return this so that the render call can be chained
  },

  // Custom
  removeUser: function () {
    // Destroy the model (which will also remove it from the server)
    // should handle errors, but we'll worry about that later... :)
    this.model.destroy();
    
    // Remove the view (remove is a built-in method of view)
    this.remove();  
  },

  // Custom
  showUserDetail: function () {
    // Assuming we've done var app = require('../app') or something... and
    // app is the Backbone router instance. Probably should have an object
    // somewhere that is responsible for generating URLs properly instead.
    app.navigate('users/' + this.model.id, { trigger: true });
  }
});

