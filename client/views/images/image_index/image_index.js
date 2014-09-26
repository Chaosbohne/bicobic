
/*****************************************************************************/
/* ImageIndex: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.ImageIndex.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .copyToClipboard': function(event, template) {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", "![" + this.name() + "](" + this.url() + ")");
  },
  
  'click .copyToEditor': function(event, template) {
    editor.insert("![" + this.name() + "](" + this.url() + ")");
  }
});

Template.ImageIndex.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* ImageIndex: Lifecycle Hooks */
/*****************************************************************************/
Template.ImageIndex.created = function () {
};

Template.ImageIndex.rendered = function () {
};

Template.ImageIndex.destroyed = function () {
};


/*
      <div class="col-md-8 col-lg-8">
        
      </div>
      
      */

