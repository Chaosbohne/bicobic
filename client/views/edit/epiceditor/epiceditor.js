
Template.epiceditor.rendered = function() {  
  if(!isEpiceditor) {
    var opts = {
      container: 'epiceditor',
      textarea: null,
      basePath: 'epiceditor',
      clientSideStorage: true,
      localStorageName: 'epiceditor',
      useNativeFullscreen: true,
      parser: marked,
      file: {
        //name: this._id,
        //defaultContent: this.markdownText,
        autoSave: 100
      },
      theme: {
        base: '/../../epiceditor/themes/base/epiceditor.css',
        preview: '/../../epiceditor/themes/preview/preview-dark.css',
        editor: '/../../epiceditor/themes/editor/epic-dark.css'
      },
      button: {
        preview: true,
        fullscreen: true,
        bar: "auto"
      },
      focusOnLoad: false,
      shortcut: {
        modifier: 18,
        fullscreen: 70,
        preview: 80
      },
      string: {
        togglePreview: 'Toggle Preview Mode',
        toggleEdit: 'Toggle Edit Mode',
        toggleFullscreen: 'Enter Fullscreen'
      },
      autogrow: true
    }
  
    console.log('new epiceditor');
    epiceditor = new EpicEditor(opts).load();
    epiceditor.importFile(this._id, this.data.markdownText);
    isEpiceditor = true;
  }

}

Template.epiceditor.created = function() {
  var that = this;
  
  autoSaveFunc = window.setInterval(function autoSave () {
    console.log('try to save');
    var inputTitle = $('#inputTitle').val();
    var inputIntroduction = $('#inputIntroduction').val();
    if(!isEpiceditor || !epiceditor)
      return;
    
    var markdownText = epiceditor.exportFile();

    var updatePost = {
      postId : that.data._id,
      title : inputTitle,
      introduction : inputIntroduction,
      markdownText : markdownText
    };
    
    Meteor.call('updatePost', updatePost, function(error) {
      if(error)
        console.log('Update went wrong');
      else
        console.log('Update successful');
    });
  }, 30000);   
  
}

Template.epiceditor.destroyed = function() {
  console.log('Template destroyed');
  isEpiceditor = false;
  if(autoSaveFunc)
    window.clearInterval(autoSaveFunc);  
}