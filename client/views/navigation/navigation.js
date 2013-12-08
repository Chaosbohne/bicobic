Template.navigation.events({
  'click #createPost': function(event, template) {
    Meteor.call('createPost', function(error, previewId) {
      if (error){
        console.log(error.reason);
      } else {
        Router.go('/edit/' + previewId);
      }
    });
  }
});