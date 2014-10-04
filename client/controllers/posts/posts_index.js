var PostsIndexSubs = new SubsManager({cacheLimit: 9999, expireIn: 9999});

PostsIndexController = RouteController.extend({
  yieldTemplates: {
    'Header': {to: 'Header'}
  },  
  
  findQuery: function() {
    return {sort: {submitted : -1}};
  },
  
  waitOn: function () {
      return [PostsIndexSubs.subscribe('posts_index', this.findQuery())];
  },

  posts: function() {
    return Posts.find({}, this.findQuery());
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
