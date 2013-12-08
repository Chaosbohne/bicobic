Router.configure({
  layoutTemplate: 'layout',
  
  notFoundTemplate: 'notfound',
  
  loadingTemplate: 'loading',
  
  yieldTemplates: {
    'header': {to: 'header'},
    'navigation': {to: 'navigation'},
    'footer': {to: 'footer'}
  }
});

Router.map(function() {

  this.route('about');
  
  this.route('contact');
   
  this.route('login');
  
  this.route('register');
});
