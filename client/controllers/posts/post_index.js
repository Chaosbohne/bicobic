var PostIndexSubs = new SubsManager({cacheLimit: 5, expireIn: 1440});

PostIndexController = RouteController.extend({
  yieldTemplates: {
    'Header': {to: 'Header'},
    'Footer': {to: 'Footer'}
  },  
  
  findQueryByName: function() {
    return {strippedTitle: this.params.name};
  },
  
  findQueryById: function() {
    return {_id: this.params.name};
  },
  
  waitOn: function () {
    return [PostIndexSubs.subscribe('post_index_by_name_or_id', this.params.name)];
  },

  postByName: function() {
    return Posts.findOne(this.findQueryByName());
  },
  
  postById: function() {
    return Posts.findOne(this.findQueryById());
  },
  
  data: function () {
    if(this.postByName()) {
      return {
        post : this.postByName()
      };      
    }else {
      return {
        post : this.postById()
      };         
    }
  },

  action: function () {
    this.render();
  }   
});

/*
PostIndexController = RouteController.extend({
  yieldTemplates: {
    'Header': {to: 'Header'},
    'Footer': {to: 'Footer'}
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
*/