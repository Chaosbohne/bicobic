
Meteor.publish('post_index_by_name', function (name) {
  if(_.isString(name)) {
    return Posts.find({strippedTitle: name});
  }else {
    this.stop();
    return;
  }
});

Meteor.publish('post_index_by_id', function (id) {
  if(_.isString(id)) {  
    return Posts.find({_id: id});
  }else {
    this.stop();
    return;
  }  
});