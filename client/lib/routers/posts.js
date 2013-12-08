Router.map(function() {
  //UserRoutes
  this.route('postsList', {
    path: '/',
    controller: 'PostsController'
  });
  
  this.route('postsList', {
    path: '/posts',
    controller: 'PostsController'
  });
  
  this.route('postPage', {
    path: '/posts/:_id',
    controller: 'PostController'
  });
});

PostController = RouteController.extend({
  template: 'postPage',

  layoutTemplate: 'layout',

  before: function() {
  },
  
  waitOn: function () {
    return [Meteor.subscribe('post', this.params._id)];
  },

  data: function () {
    return Posts.findOne({_id: this.params._id});
  },
  
  show: function() {
    this.render();
  }
});

PostsController = RouteController.extend({
  template: 'postsList',
  
  layoutTemplate: 'layout',
  
  /*before: function() {
    this.subscribe('posts').wait();
  },*/
  
  
  waitOn: function() {
    return Meteor.subscribe('posts', {submitted: -1});
  },
  
  data: function() {
    templateData = { posts: Posts.find({},{sort: {submitted: -1}}) };
    return templateData;
  },

  show: function() {
    this.render();
  }
});