
/*****************************************************************************/
/* EditIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.EditIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.EditIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  showDownContent: function() {
    return Session.get('showDownContent');
  }
});

/*****************************************************************************/
/* EditIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.EditIndex.created = function () {
};

Template.EditIndex.rendered = function () { 
  console.log(this);
  
    editor = ace.edit("editor");
    editor.setTheme("ace/theme/chrome");
    editor.getSession().setMode("ace/mode/markdown");

    Session.set('showDownContent', editor.getValue());
  
    var that = this;  
    autoSaveFunc = window.setInterval(function autoSave () {
      if(!editor) return;
        
      var markdown = editor.getValue();
      if(_.isUndefined(this.temp))
        this.temp = markdown;

      if(markdown != this.temp) {
        this.temp = markdown;
        Posts.update({_id : that.data.post._id}, {$set:{content : markdown}}, function(error) {
          if(!error)
            Session.set('editSaveStatus', true);
        });        
      }
    }, 10000);
    
    editor.getSession().on('change', function(event) {
      if(!editor) return;
      
      Session.set('showDownContent', editor.getValue());
      Session.set('editSaveStatus', false);
    });
};

Template.EditIndex.destroyed = function () {
  editor = null;
  if(autoSaveFunc)
    window.clearInterval(autoSaveFunc);   
};


