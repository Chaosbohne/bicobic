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
  
  onBeforeAction: function() {
    Session.setDefault('contactFormButtonMessage', 'Send Message');
    Session.setDefault('contactNameError', null);
    Session.setDefault('contactEmailError', null);
    Session.setDefault('contactMessageError', null);   
  },
  
  onAfterAction: function () {
    if (this.params.hash) {
      var scrollTop = $("#" + this.params.hash).offset().top;
      $("html,body").animate({
        scrollTop: scrollTop
      });    
    }  
  }
});
