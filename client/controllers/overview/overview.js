OverviewController = RouteController.extend({
  yieldTemplates: {
    'Header': {to: 'Header'},
    'Footer': {to: 'Footer'}
  },   
  
  waitOn: function () {
  },

  data: function () {
  },

  action: function () {
    this.render();
  },
  
  onAfterAction: function () {
    // always start by resetting scroll to top of the page
    $(window).scrollTop(0);
    // if there is a hash in the URL, handle it
    if (this.params.hash) {
      // now this is important : Deps.afterFlush ensures that iron-router rendering
      // process has finished inserting the current route template into DOM so we
      // can manipulate it via jQuery, if you skip this part the HTML element you
      // want to scroll to might not yet be present in the DOM (this is probably
      // why your code fails in the first place)
      Deps.afterFlush(_.bind(function() {
        var scrollTop = $("#" + this.params.hash).offset().top;
        $("html,body").animate({
          scrollTop: scrollTop
        });
      }, this));
    }    
  }
});
