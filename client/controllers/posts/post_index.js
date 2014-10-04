var PostIndexSubs = new SubsManager({cacheLimit: 5, expireIn: 1440});

PostIndexController = RouteController.extend({
  yieldTemplates: {
    'Header': {to: 'Header'}
  },  
  
  findQuery: function() {
    return {strippedTitle: this.params.name};
  },
  
  waitOn: function () {
    return [PostIndexSubs.subscribe('post_index_by_name', this.params.name)];
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
