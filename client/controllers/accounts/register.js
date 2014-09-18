RegisterController = RouteController.extend({
  yieldTemplates: {
    'Header': {to: 'Header'}
  },    
  
  onRun:function() {
    Session.set('registerFormError', false);
    Session.set('registerFormSuccess', false);
  },
  
  waitOn: function () {
  },

  data: function () {
  },

  action: function () {
    this.render();
  },
  
  onStop: function () {
    Session.set('registerFormError', null);
    Session.set('registerFormSuccess', null);
  }   
});
