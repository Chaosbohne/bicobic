
/*****************************************************************************/
/* Contact: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Contact.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click button': function(event, template) {
    event.preventDefault();
    
    var contactName = 'name';
    var contactEmail = 'email';
    var contactMessage = 'message';
    
    var contactNameValue = template.find('[name=contactName]').value;
    var contactEmailValue = template.find('[name=contactEmail]').value;
    var contactMessagValue = template.find('[name=contactMessage]').value;
    
    var contactFields = {};
    contactFields[contactName] = contactNameValue;
    contactFields[contactEmail] = contactEmailValue;
    contactFields[contactMessage] = contactMessagValue;
    
    var contactContext = Schemas.ContactSchema.newContext();
    var isValid = contactContext.validate(contactFields);

    if(!isValid) {    
      var contactNameError = contactContext.keyErrorMessage(contactName);
      var contactEmailError = contactContext.keyErrorMessage(contactEmail);
      var contactMessageError = contactContext.keyErrorMessage(contactMessage);
      
      if(contactNameError)
        Session.set('contactNameError', contactNameError);
      else
        Session.set('contactNameError', null);
      
      if(contactEmailError)
        Session.set('contactEmailError', contactEmailError);
      else
        Session.set('contactEmailError', null);
      
      if(contactMessageError)
        Session.set('contactMessageError', contactMessageError);
      else
        Session.set('contactMessageError', null);   
      
    }else {
      Session.set('contactNameError', null);
      Session.set('contactEmailError', null);
      Session.set('contactMessageError', null);
      
      Meteor.call('/overview/contact', contactFields, function(error) {
        if(!error) {
          Session.set('contactFormButtonMessage', 'Message successfully sent');
          setTimeout(function(){
            Session.set('contactFormButtonMessage', 'Send Message');
            $('[name=contactName]').val('');
            $('[name=contactEmail]').val('');
            $('[name=contactMessage]').val('');
          }, 3000);
        }else {
          Session.set('contactFormButtonMessage', 'Message was not sent');
        }
      });      
    }
    
  }
});

Template.Contact.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  contactNameError : function() {
    return Session.get('contactNameError');
  },
  contactEmailError : function() {
    return Session.get('contactEmailError');
  },
  contactMessageError : function() {
    return Session.get('contactMessageError');
  },
  contactFormButtonMessage : function() {
    return Session.get('contactFormButtonMessage');
  }
});

/*****************************************************************************/
/* Contact: Lifecycle Hooks */
/*****************************************************************************/
Template.Contact.created = function () {
};

Template.Contact.rendered = function () {
};

Template.Contact.destroyed = function () {
};


