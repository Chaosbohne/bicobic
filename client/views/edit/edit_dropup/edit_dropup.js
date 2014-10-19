
/*****************************************************************************/
/* EditDropup: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.EditDropup.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .save': function(event, template) {
    event.preventDefault();

    if(editor) {
      var markdown = editor.getValue();
      Posts.update({_id : this._id}, {$set:{content : markdown, isPublished : this.isPublished}}, function(error) {
        if(!error)
          Session.set('editSaveStatus', true);
      });
    }
  },
    
  'click .searchPopup':function(event, template) {
    event.preventDefault();
    $('#EditSearch').modal('show');
  }
});

Template.EditDropup.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  saveStatus : function() {
    return Session.get('editSaveStatus');
  }  
});

/*****************************************************************************/
/* EditDropup: Lifecycle Hooks */
/*****************************************************************************/
Template.EditDropup.created = function () {
};

Template.EditDropup.rendered = function () {
};

Template.EditDropup.destroyed = function () {
};


