Template.login.events({
  'click #logout': function(event, template) {
    event.preventDefault();
    
    Meteor.logout();
    Router.go('/');
  },
  
  'submit form': function(event, template) {
    event.preventDefault();
   
    var inputName = $(event.target).find('#inputName').val().trim();
    var inputPassword = $(event.target).find('#inputPassword').val().trim();
    
    Meteor.loginWithPassword(inputName, inputPassword, function(error){
      Router.go('/');
    });
  }
});
