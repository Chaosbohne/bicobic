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
    if (Roles.userIsInRole(this.userId, ['admin'])){
      return Posts.insert({});    
    }else {
      this.stop();
      return;  
    }
  }
});
