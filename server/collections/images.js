/*
 * Add query methods like this:
 *  Images.findPublic = function () {
 *    return Images.find({is_public: true});
 *  }
 */

Images.allow({
  insert: function (userId, doc) {
    return (userId && doc.metadata.owner === userId);
  },

  update: function (userId, doc, fieldNames, modifier) {
    return (userId && doc.metadata.owner === userId);
  },

  remove: function (userId, doc) {
    return (userId && doc.metadata.owner === userId);
  },
  download: function(userId) {
    console.log(userId);
    return true;
  },
  fetch: []
});

/*
Images.deny({
  insert: function (userId, doc) {
    return false;
  },

  update: function (userId, doc, fieldNames, modifier) {
    return false;
  },

  remove: function (userId, doc) {
    return false;
  }
});
*/
