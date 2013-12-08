Meteor.methods({
  sendContactEmail: function (from, name, text) {
    check([from, name, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();
    var user = Meteor.user();    
    
    var name = name.trim();
    var from = from.trim();
    var text = text.trim();
    
    var isError = false;

    if (!user)
      throw new Meteor.Error(401, "Normal websiteusage should not cause such errors!");
    
    if(name.length < 4) {
      throw new Meteor.Error(401, "Normal websiteusage should not cause such errors!");
    }
    
    if(name.length > 30) {
      throw new Meteor.Error(401, "Normal websiteusage should not cause such errors!");
    }    
    
    from = from.replace(/^\s*|\s*$/g, "");
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!(re.test(from))) {
      throw new Meteor.Error(401, "Normal websiteusage should not cause such errors!");
    }
    
    if(from.length > 100) {
      throw new Meteor.Error(401, "Normal websiteusage should not cause such errors!");
    }    
    
    if(text.length < 20) {
      throw new Meteor.Error(401, "Normal websiteusage should not cause such errors!");
    }    
    
    if(text.length > 50000) {
      throw new Meteor.Error(401, "Normal websiteusage should not cause such errors!");
    }      
    
    if(isError) {
      throw new Meteor.Error(401, "Normal websiteusage should not cause such errors!");
    }    
    
    
    Email.send({
      to: 'bicobic@gmx.de',
      from: 'bicobic@gmx.de',
      subject: 'Email from bicobic-blog: (' + name +')(' + from + ')',
      text: text
    });
  }
});