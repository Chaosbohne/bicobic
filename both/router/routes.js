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

beforeHooks = {
  isNotLoggedIn: function() {
    if(!(Meteor.loggingIn() || Meteor.user())) {
      Router.go('posts.index');
    }
  }
}

Router.onBeforeAction(beforeHooks.isNotLoggedIn, {only: ['edit.index']});

Router.map(function () {
  this.route('posts.index', {path: '/'});
  this.route('post.index', {path: '/post/:name'}); 
  this.route('register', {path: '/accounts/register'});
  this.route('login', {path: '/accounts/login'});
  this.route('edit.index', {path: '/edit/:id'});
  this.route('images.index', {path: '/'});
});
