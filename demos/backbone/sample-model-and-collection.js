// User is a constructor which will make a new user object
var User = Backbone.Model.extend({
  // The URL to which the model syncs (DELETE, PUT, GET)
  urlRoot: '/api/users'
});

// UserCollection is a constructor that will make a new collection
var UserCollection = Backbone.Collection.extend({
  // The type of model in this collection is a User
  model: User,

  // The URL to which the collection syncs (POST, PUT, DELETE, GET) 
  url: '/api/users'
});

// To create a new instance, you would do this:
// var users = new UserCollection()