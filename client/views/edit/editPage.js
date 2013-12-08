Template.editPage.events({
  'keyup #inputTitle': function(event, template) {
    var text = $(event.target).val();
    template.find("#showInputTitle").innerHTML = text;
  },
  
  'keyup #inputIntroduction': function(event, template){
    var text = $(event.target).val();
    template.find('#showInputIntroduction').innerHTML = text;
  },

  'keyup #wmd-input': function(event, template){
    var text = $('#wmd-preview').html();
    template.find('#showInputText').innerHTML = text;    
  },
  
  'submit form': function(event, template) {
    event.preventDefault();
    
    var inputTitle = $(event.target).find('#inputTitle').val();
    var inputIntroduction = $(event.target).find('#inputIntroduction').val();
    var inputText = $(event.target).find('#wmd-input').val();    
    
    
    
    var updatePost = {
      postId : this._id,
      title : inputTitle,
      introduction : inputIntroduction,
      text : inputText
    };
    
    console.log(updatePost);
    
    Meteor.call('updatePost', updatePost, function(error) {
      if(error)
        console.log('Update went wrong');
      else
        console.log('Update successful');
    });
    
    
    /*
    var inputTitle = $(event.target).find('#inputTitle').val().replace(/\r\n|\r|\n/g,"<br />");
    var inputIntroduction = $(event.target).find('#inputIntroduction').val().replace(/\r\n|\r|\n/g,"<br />");
    var inputText = $(event.target).find('#inputText').val().replace(/\r\n|\r|\n/g,"<br />");    
       
    var updatePost = {
      postId : this._id,
      title : inputTitle,
      introduction : inputIntroduction,
      text : inputText
    };
    
    Meteor.call('updatePost', updatePost, function(error) {
      if(error)
        console.log('Update went wrong');
      else
        console.log('Update successful');
    });
    */
  }
});

Template.editPage.created = function() {
  var that = this;
  
  autoSaveFunc = window.setInterval(function autoSave () {
    var inputTitle = that.find('#inputTitle').value;
    var inputIntroduction = that.find('#inputIntroduction').value;
    var inputText = that.find('#wmd-input').value;    

    var updatePost = {
      postId : that.data._id,
      title : inputTitle,
      introduction : inputIntroduction,
      text : inputText
    };    
    
    Meteor.call('updatePost', updatePost, function(error) {
      if(error)
        console.log('Update went wrong');
      else
        console.log('Update successful');
    }); 
  }, 30000);  
}

Template.editPage.rendered = function() {  
  
  console.log('RE render');
  
  converter1 = Markdown.getSanitizingConverter();
                
  converter1.hooks.chain("preBlockGamut", function (text, rbg) {
    return text.replace(/^ {0,3}""" *\n((?:.*?\n)+?) {0,3}""" *$/gm, function (whole, inner) {
        return "<blockquote>" + rbg(inner) + "</blockquote>\n";
    });
  });
                
  var editor1 = new Markdown.Editor(converter1);
                
  editor1.run();    
}

Template.editPage.destroyed = function() {
 if(autoSaveFunc)
   window.clearInterval(autoSaveFunc);
}
