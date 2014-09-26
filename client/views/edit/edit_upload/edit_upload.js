
/*****************************************************************************/
/* EditUpload: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.EditUpload.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
  'change #addImage': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      //Some typechecks
      //TAKE CARE: These checks have to be same as in collection!
      var error = null;
      if(file.size > 3145728) {
        error = {hasError: true, reason: 'Please choose an image smaller than 3MB!'};
        Session.set('ImageError', error);
        return false;
      }
      //check filetype
      if(!file.type.match('image/*')) {
        error = {hasError: true, reason: 'Please choose an image!'};
        Session.set('ImageError', error);
        return false;
      }
      function hasExtension(fileName, exts) {
        return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
      }
      //check extensions
      if (!hasExtension(file.name, ['.jpg', '.png', '.JPG', '.PNG'])) {
        error = {hasError: true, reason: 'Just jpg and png are allowed!'};
        Session.set('ImageError', error);
        return false;
      }       

      var fsFile = new FS.File(file);
      fsFile.metadata = {owner: Meteor.userId()}; 
      
      Images.insert(fsFile, function (err, fileObj) {
        if(err) {
          error = {hasError: true, reason: err.reason};
          Session.set('ImageError', error);
        }      
        
        //Save the imageId and Url to the userCollection just in case the upload was completed
        Deps.autorun(function (computation) {
          //Subscribe to the image that should be added
          //This causes Deps to rerun everytimes the handle changes
          var subscriptionHandle = Meteor.subscribe('image_index', fsFile._id);
          //Get the image from subscription
          var img = Images.findOne({_id : fsFile._id });
          
          //If there is an image
          if(img) {
            //And the image already has an url
            //The image gets the url first when the upload is completed
            //reactive data source, so this reruns Deps
            if(img.url()){
              //If the call was send whether there was an error or not
              //the computation and subscription should stop
              computation.stop();
              subscriptionHandle.stop();
            }
          }
        });        
        
      });
    });
  }
});

Template.EditUpload.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* EditUpload: Lifecycle Hooks */
/*****************************************************************************/
Template.EditUpload.created = function () {
};

Template.EditUpload.rendered = function () {
};

Template.EditUpload.destroyed = function () {
};


