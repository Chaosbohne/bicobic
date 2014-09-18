Accounts.config({
  sendVerificationEmail : false
});

Accounts.onCreateUser(function(options, user) {
  if(Meteor.users.find().count() > 0)
    throw new Meteor.Error(401, "No registration possible!");
  
  if(options.email != 'bicobic@gmx.de')
    throw new Meteor.Error(401, "No registration possible!");
 
  if(options.profile)
    user.profile = options.profile;
  
  return user;
});