
/*****************************************************************************/
/* Login: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Login.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
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

Template.Login.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Login: Lifecycle Hooks */
/*****************************************************************************/
Template.Login.created = function () {
};

Template.Login.rendered = function () {
};

Template.Login.destroyed = function () {
};


