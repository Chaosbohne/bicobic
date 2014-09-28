
Meteor.publish('post_index_by_name', function (name) {
  // you can remove this if you return a cursor
  
  //if(_.isString(name)) 
  
  return Posts.find({strippedTitle: name});
});

Meteor.publish('post_index_by_id', function (id) {
  // you can remove this if you return a cursor
  
  //if(_.isString(name)) 
  
  return Posts.find({_id: id});
});