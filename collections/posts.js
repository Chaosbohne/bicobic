Posts = new Meteor.Collection('posts');

Posts.allow({
  update: function(userId, doc) {
    var user = Meteor.user();
    if(!user){
        return false;
    }  
    return true;
  },
  remove: function(userId, doc) {
    var user = Meteor.user();
    if(!user){
        return false;
    }  
    return true;
  },
  insert: function(userId, doc) {
    var user = Meteor.user();
    if(!user){
        return false;
    }  
    return true;
  }
});