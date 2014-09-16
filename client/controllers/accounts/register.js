RegisterController = RouteController.extend({
  yieldTemplates: {
    'Header': {to: 'Header'}
  },    
  
  waitOn: function () {
  },

  data: function () {
  },

  action: function () {
    this.render();
  } 
});
