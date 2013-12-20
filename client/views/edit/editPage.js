Template.editPage.events({
  'keyup #inputTitle': function(event, template) {
    var text = $(event.target).val();
    template.find("#showInputTitle").innerHTML = text;
  },
  
  'keyup #inputIntroduction': function(event, template){
    var text = $(event.target).val();
    template.find('#showInputIntroduction').innerHTML = text;
  },
  
  'submit form': function(event, template) {
    event.preventDefault();
    
    var inputTitle = $(event.target).find('#inputTitle').val();
    var inputIntroduction = $(event.target).find('#inputIntroduction').val();
    //var markdownText = $(event.target).find('#wmd-input').val();    
    if(!isEpiceditor)
      return;
    
    var markdownText = epiceditor.exportFile();
    console.log('markdownText' + markdownText);
    var updatePost = {
      postId : this._id,
      title : inputTitle,
      introduction : inputIntroduction,
      markdownText : markdownText
    };
    
    console.log(updatePost);
    
    Meteor.call('updatePost', updatePost, function(error) {
      if(error)
        console.log('Update went wrong');
      else
        console.log('Update successful');
    });
  }
});