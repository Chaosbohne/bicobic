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
  },
  syntaxHighlighting: function() {
    $('body').addClass('language-javascript');
  }  
}

onStopHooks = {
  syntaxHighlighting: function() {
    $('body').removeClass('language-javascript');
  }
}

Router.onBeforeAction(beforeHooks.isNotLoggedIn, {only: ['edit.index']});
Router.onBeforeAction(beforeHooks.syntaxHighlighting,  {only: ['posts.index', 'post.index']});
Router.onStop(onStopHooks.syntaxHighlighting,  {only: ['posts.index', 'post.index']});

Router.map(function () {
  this.route('posts.index', {path: '/blog'});
  this.route('post.index', {path: '/post/:name'}); 
  this.route('edit.index', {path: '/edit/:id'});
  this.route('register', {path: '/accounts/register'});
  this.route('login', {path: '/accounts/login'});
  this.route('overview', {path: '/'});
});
