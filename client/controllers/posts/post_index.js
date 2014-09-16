PostIndexController = RouteController.extend({
  yieldTemplates: {
    'Header': {to: 'Header'}
  },  
  
  findQuery: function() {
    return {};
  },
  
  waitOn: function () {
      return [Meteor.subscribe('posts_index')];
  },

  posts: function() {
    return Posts.find(this.findQuery());
  },
  
  data: function () {
    return {
      posts : this.posts()
    };
  },

  action: function () {
    this.render();
  }
});
