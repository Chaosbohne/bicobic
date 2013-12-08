Template.postCreate.events({
  'click #createPost': function(event, template) {
    Meteor.call('createPost', function(error, postId) {
      if (error){
        console.log(error.reason);
      } else {
        Router.go('/edit/' + postId);
      }
    });
  }
});