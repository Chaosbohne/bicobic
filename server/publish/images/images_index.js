/*****************************************************************************/
/* ImagesIndex Publish Functions
/*****************************************************************************/

Meteor.publish('images_index', function () {
  // you can remove this if you return a cursor
  return Images.find();
});

Meteor.publish('image_index', function (imageId) {
  // you can remove this if you return a cursor
  return Images.find({ _id : imageId });
});