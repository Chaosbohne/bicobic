
/*****************************************************************************/
/* EditSaveStatus: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.EditSaveStatus.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.EditSaveStatus.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  status : function() {
    return Session.get('editSaveStatus');
  }
});

/*****************************************************************************/
/* EditSaveStatus: Lifecycle Hooks */
/*****************************************************************************/
Template.EditSaveStatus.created = function () {
};

Template.EditSaveStatus.rendered = function () {
};

Template.EditSaveStatus.destroyed = function () {
};


