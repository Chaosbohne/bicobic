/*****************************************************************************/
/* ImagesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('images_index', function () {
  // you can remove this if you return a cursor
    if (Roles.userIsInRole(this.userId, ['admin'])) {
      return Images.find();
    }
  
    return this.stop();  
});

Meteor.publish('image_index', function (imageId) {
  // you can remove this if you return a cursor
  if (Roles.userIsInRole(this.userId, ['admin'])) {
    return Images.find({ _id : imageId });
  }

  return this.stop();
});