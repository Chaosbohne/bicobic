
/*****************************************************************************/
/* PostItem: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.PostItem.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .publish' : function(event, template) {
    event.preventDefault();
    Posts.update({_id : this._id}, {$set : {'isPublished' : true}});
  }
});

Template.PostItem.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* PostItem: Lifecycle Hooks */
/*****************************************************************************/
Template.PostItem.created = function () {
};

Template.PostItem.rendered = function () {
};

Template.PostItem.destroyed = function () {
};


