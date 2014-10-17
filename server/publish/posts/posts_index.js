/*****************************************************************************/
/* PostsIndex Publish Functions
/*****************************************************************************/

Meteor.publish('posts_index', function (query) {
  var sort = _.pick(query, 'sort');
  
  if (Roles.userIsInRole(this.userId, ['admin'])) {
    return Posts.find({}, sort);  
  }
  
  return Posts.find({'isPublished' : true}, sort);
});
