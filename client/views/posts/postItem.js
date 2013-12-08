Template.postItem.helpers({
  shortenText: function() {
    return this.text.substr(0, 200);
  }
});

Template.postItem.events({
  'click #isReady': function(event, template) {
    event.preventDefault();
    
    Meteor.call('publishPost', this._id, function(error) {
      if(error)
        console.log('Publishing went wrong');
      else
        console.log('Publishing successful');
    }); 
  }
});