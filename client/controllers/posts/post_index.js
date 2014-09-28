PostIndexController = RouteController.extend({
  yieldTemplates: {
    'Header': {to: 'Header'}
  },  
  
  findQuery: function() {
    return {strippedTitle: this.params.name};
  },
  
  waitOn: function () {
    return [Meteor.subscribe('post_index_by_name', this.params.name)];
  },

  post: function() {
    return Posts.findOne(this.findQuery());
  },
  
  data: function () {
    return {
      post : this.post()
    };
  },

  action: function () {
    this.render();
  }
});
