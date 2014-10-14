Accounts.config({
  sendVerificationEmail : false
});

Accounts.onCreateUser(function(options, user) {
  if(Meteor.users.find().count() > 0)
    throw new Meteor.Error(401, "No registration possible!");
 
  if(options.profile)
    user.profile = options.profile;
  
  user.email = 'bicobic@gmx.de';
  
  return user;
});
