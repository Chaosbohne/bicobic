Template.register.helpers({
  registerFormError: function() {
    return Session.get('registerFormError');
  },
  
  registerFormSuccess: function() {
    return Session.get('registerFormSuccess');
  }
});


Template.register.events({ 
  'submit form': function(event, template) {
    event.preventDefault();
    
    Session.set('registerFormError', false);
    Session.set('registerFormSuccess', false);
    
   
    var inputName = $(event.target).find('#inputName').val().trim();
    var inputPassword1 = $(event.target).find('#inputPassword1').val().trim();
    var inputPassword2 = $(event.target).find('#inputPassword2').val().trim();
    
    if(inputPassword1 !== inputPassword2) {
      Session.set('registerFormError', true);
      return;
    }
    
    Accounts.createUser({
      username: inputName,
      password: inputPassword1,
      email: 'bicobic@gmx.de',
      profile: {
        name: 'Rico Ruszewski'
      }      
    }, function(error) {
      if(error) {
        Session.set('registerFormError', true);
      }else {
        Session.set('registerFormSuccess', true);
      }
    });
  }
});