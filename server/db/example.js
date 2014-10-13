if(Meteor.users.find().count() === 0){
  
  var userId = Accounts.createUser({
    username: 'username',
    password: 'password',
    email: 'email@gmail.com',
    profile: {
      name: 'Your name'
    }
  });
  
  Roles.addUsersToRoles(userId, ['admin']);
}