/*****************************************************************************/
/* PostsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('posts_index', function (query) {
  var sort = _.pick(query, 'sort');

 var user = Meteor.users.findOne(this.userId);
  if(!user) return Posts.find({'isPublished' : true}, sort);
  
  return Posts.find({}, sort);
});
