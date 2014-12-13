
Meteor.publish('post_index_by_name', function (name) {
  if(_.isString(name)) {
    return Posts.find({strippedTitle: name});
  }
  
  return this.stop();
});

Meteor.publish('post_index_by_name_or_id', function(idOrName){
  if(_.isString(idOrName)) {
    var withName = Posts.findOne({strippedTitle: idOrName});
    if(withName) {
      return Posts.find({strippedTitle: idOrName})
    }
    return Posts.find({_id: idOrName})
  }
  
  return this.stop();
});

Meteor.publish('post_index_by_id', function (id) {
  if(_.isString(id)) {  
    return Posts.find({_id: id});
  }
   
  return this.stop();
});