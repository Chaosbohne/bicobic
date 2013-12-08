Template.contact.helpers({
  contactFormNameErrorToSmall: function() {
    return Session.get('contactFormNameErrorToSmall');
  },
  contactFormEmailError: function() {
    return Session.get('contactFormEmailError');
  },
  contactFormTextErrorToSmall: function() {
    return Session.get('contactFormTextErrorToSmall');
  },
  contactFormNameErrorToBig: function() {
    return Session.get('contactFormNameErrorToBig');
  },  
  contactFormTextErrorToBig: function() {
    return Session.get('contactFormTextErrorToBig');
  },    
  contactFormEmailErrorToBig: function() {
    return Session.get('contactFormEmailErrorToBig');
  },
  contactFormSendError: function() {
    return Session.get('contactFormSendError');
  },
  contactFormSendSuccess: function() {
    return Session.get('contactFormSendSuccess');
  }
});

Template.contact.events({
  'submit form': function(event, template) {
    event.preventDefault();
    
    Session.set('contactFormNameErrorToSmall', false);
    Session.set('contactFormEmailError', false);
    Session.set('contactFormTextErrorToSmall', false);
    Session.set('contactFormTextErrorToBig', false);
    Session.set('contactFormNameErrorToBig', false);
    Session.set('contactFormEmailErrorToBig', false);
    Session.set('contactFormSendError', false);
    Session.set('contactFormSendSuccess', false);
    
    
    var inputName = $(event.target).find('#inputName').val().trim();
    var inputEmail = $(event.target).find('#inputEmail').val().trim();
    var inputText = $(event.target).find('#inputMessage').val().trim();
    
    var isError = false;
    
    if(inputName.length < 4) {
      Session.set('contactFormNameErrorToSmall', true);
      isError = true;
    }
    
    if(inputName.length > 30) {
      Session.set('contactFormNameErrorToBig', true);
      isError = true;
    }
    
    inputEmail = inputEmail.replace(/^\s*|\s*$/g, "");
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!(re.test(inputEmail))) {
      Session.set('contactFormEmailError', true);      
      isError = true;        
    }

    if(inputEmail.length > 100) {
      Session.set('contactFormEmailErrorToBig', true);
      isError = true;    
    }
    
    if(inputText.length < 20) {
      Session.set('contactFormTextErrorToSmall', true);
      isError = true;    
    }
    
    if(inputText.length > 50000) {
      Session.set('contactFormTextErrorToBig', true);
      isError = true;    
    }    
    
    if(!isError){
      Meteor.call('sendContactEmail', inputEmail, inputName, inputText, function(error) {
        if(error) {
          Session.set('contactFormSendError', true);
        }else {
          Session.set('contactFormSendSuccess', true);
          $(event.target).find('#inputName').val('');
          $(event.target).find('#inputEmail').val('');
          $(event.target).find('#inputMessage').val('');     
        }
      });      
    }
  }
});