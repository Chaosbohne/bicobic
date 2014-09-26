
Meteor.publish('post_index', function (name) {
  // you can remove this if you return a cursor
  
  //if(_.isString(name)) 
  
  return Posts.find({strip: name});
});
