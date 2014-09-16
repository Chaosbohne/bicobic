Posts = new Meteor.Collection('posts');


Posts.strip = function(str) {
   return  str.toLowerCase().replace(/[^\w ]+/g, "").replace(RegExp(" +", "g"), "-");
};


/*
 * Add query methods like this:
 *  Posts.findPublic = function () {
 *    return Posts.find({is_public: true});
 *  }
 */
