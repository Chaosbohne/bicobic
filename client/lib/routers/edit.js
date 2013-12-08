Router.map(function() {  
  this.route('editPage', {
    path: '/edit/:_id',
    controller: 'EditController'
  });  
});


EditController = RouteController.extend({
  template: 'editPage',

  layoutTemplate: 'layout',

  before: function() {
    var user = Meteor.user();
    if(!user){
      Router.go('/posts');
    }
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