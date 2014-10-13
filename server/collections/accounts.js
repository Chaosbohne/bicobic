Meteor.users.allow({
  insert: function(userId, doc) {
    return true;
  },

  update: function(userId, doc, fields, modifier) {
    return true;
  },

  remove: function(userId, doc) {
    return true;
  },
  fetch: ['_id']
});

Meteor.roles.allow({
  insert: function(userId, doc) {
    return true;
  },

  update: function(userId, doc, fields, modifier) {
    return true;
  },

  remove: function(userId, doc) {
    return true;
  },
  fetch: ['_id']
});