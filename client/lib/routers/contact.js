/*
Meteor.Router.add({
  '/contact': 'contact'
});

Meteor.Router.filters({
  'clearContactSessions': function(page) {
    Session.set('contactFormNameErrorToSmall', false);
    Session.set('contactFormEmailError', false);
    Session.set('contactFormTextErrorToSmall', false);   
    Session.set('contactFormTextErrorToBig', false);
    Session.set('contactFormNameErrorToBig', false);
    return page;
  }
});

Meteor.Router.filter('clearContactSessions');

*/