Meteor.methods({
  '/overview/contact': function (contactFields) {
    if(contactFields) {
      var contactContext = Schemas.ContactSchema.newContext();
      var isValid = contactContext.validate(contactFields);      
      
      if(isValid) {
        this.unblock();      
        
        Email.send({
          to: 'bicobic@gmx.de',
          from: contactFields.email,
          subject: 'Email from bicobic-blog: (' + contactFields.name +')(' + contactFields.email + ')',
          text: contactFields.message
        });              
      }else {
        throw new Meteor.Error("validation-failed", "The validation of your input parameters failed!");
      }
    }else {
      throw new Meteor.Error("validation-failed", "The validation of your input parameters failed!");
    }
  }
});