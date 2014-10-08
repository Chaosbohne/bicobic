/*****************************************************************************/
/* Posts Methods */
/*****************************************************************************/

Meteor.methods({
 /*
  * Example:
  *  '/app/posts/update/email': function (email) {
  *    Users.update({_id: this.userId}, {$set: {'profile.email': email}});
  *  }
  *
  */
  '/app/posts/create': function() {
    var user = Meteor.user();
    if(!user){ throw new Meteor.Error(401, "You are no admin!"); }
   
    return Posts.insert({});    
  }
});
