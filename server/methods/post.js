

Meteor.methods({
  createPost: function() {  
    var user = Meteor.user();
    if(!user){
        throw new Meteor.Error(401, "You are no admin!");
    }     
    
    var post = {
      userId: user._id,
      author: user.username,
      title: 'Title',
      introduction: 'Introduction',
      markdownText: '',
      submitted: new Date().getTime(),
      upvoters: [], 
      votes: 0,
      isReady: false
    };      
    
    return Posts.insert(post);
  },
  
  updatePost: function(updatePost) {
    var user = Meteor.user();
    if(!user){
        throw new Meteor.Error(401, "You are no admin!");
    }  

    //var Converter = new pagedown.Converter();
    //var safeConverter = pagedown.getSanitizingConverter();
    
    //console.log(Converter.makeHtml("**I am bold!** Hello <script>doEvil();</script>"));    
    //console.log(safeConverter.makeHtml("**I am bold!** Hello <script>doEvil();</script>"));
    
    //var text = safeConverter.makeHtml(updatePost.text);
    
    Posts.update({
      _id: updatePost.postId,
      isReady: true
    }, {$set: {
      title: updatePost.title,
      introduction: updatePost.introduction,
      markdownText: updatePost.markdownText}
    });
    
    Posts.update({
      _id: updatePost.postId,
      isReady: false
    }, {$set: {
      title: updatePost.title,
      introduction: updatePost.introduction,
      markdownText: updatePost.markdownText,
      submitted: new Date().getTime()}
    });
  },
  
  publishPost: function(postId) {
    var user = Meteor.user();
    if(!user){
        throw new Meteor.Error(401, "You are no admin!");
    } 
    
    Posts.update({
      _id: postId,
      isReady: false
    }, {$set: {
      isReady: true,
      submitted: new Date().getTime()
      }
    });    
  }  
});

