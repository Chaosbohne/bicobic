/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route('posts.index', {path: '/'});
  this.route('post.index', {path: '/post/:name'}); 
  this.route('register', {path: '/accounts/register'});
  this.route('login', {path: '/accounts/login'});
});
