Meteor.publish('posts', function(sort) {
  var user = Meteor.users.findOne(this.userId);
  if(!user){
    return Posts.find({isReady: true}, {sort: sort, fields: {markdown: false}});
  }
  return Posts.find({}, {sort: sort});
});

Meteor.publish('post', function(id) {
  return id && Posts.find(id);
});