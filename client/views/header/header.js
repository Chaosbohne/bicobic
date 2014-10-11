
/*****************************************************************************/
/* Header: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Header.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'click .CreatePost':function(event, template) {
    event.preventDefault();
    Meteor.call('/app/posts/create', function(error, postId) {
      if(!error)
        Router.go('edit.index', {id: postId});  
    });
  }
});

Template.Header.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
  activeIfTemplateIs: function (template) {
    var currentRoute = Router.current();
    return currentRoute && template === currentRoute.lookupTemplate() ? 'active' : '';
  }  
});


/*****************************************************************************/
/* Header: Lifecycle Hooks */
/*****************************************************************************/
Template.Header.created = function () {
};

Template.Header.rendered = function () {
  console.log(this);
  console.log(Router.current());
  console.log(Router.current().lookupTemplate());
};

Template.Header.destroyed = function () {
};


