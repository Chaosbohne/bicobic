Posts = new Meteor.Collection('posts');

PostSchema = new SimpleSchema({
  authorId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    denyUpdate: true,
    autoValue: function() {
      if (this.isInsert) {
        if(this.userId)
          return Meteor.user()._id;
        else if(this.isFromTrustedCode)
          return Meteor.users.findOne({'emails.address' : 'bicobic@gmx.de'})._id;        
      }
    }
  }, 
  author: {
    type: String,
    denyUpdate: true,
    autoValue: function() {
      if (this.isInsert) {
        if(this.userId)
          return Meteor.user().profile.name;
        else if(this.isFromTrustedCode)
          return Meteor.users.findOne({'emails.address' : 'bicobic@gmx.de'}).username;        
      }
    }
  },
  createdAt: {
    type: Date,    
    denyUpdate: true,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    },
  },  
  updatedAt: {
    type: Date,    
    autoValue: function() {
      return new Date();
    },
  },
  content: {
    type: String,
    autoValue: function() {
      if(this.isInsert) {
        return "Awesome headline of my new post↵===================↵↵Some introduction about how aweome a awesome post could be.↵↵↵More main Content."
      }
      
      return this.value;  
    }
  },
  html: {
    type: String,
    autoValue: function() {
      var converter = new Showdown.converter();
      return converter.makeHtml(this.field('content').value);      
    }
  },
  title: {
    type: String,
    autoValue: function() {      
      var html = this.field('html').value;
      var h1s = html.match(/<h1(.*?)<\/h1>/g);
      
      var matches = _.map(h1s, function(val){ return val.replace(/<\/?h1>/g,'').replace(/<h1(.*?)>/g,''); });

      if(matches)
        return matches[0];
      else
        return 'default Title' ; //defaltTitle
    }
  },
  strippedTitle: {
    type: String,
    autoValue: function() {
     return this.field('title').value.toLowerCase().replace(/[^\w ]+/g, "").replace(RegExp(" +", "g"), "-");
    }    
  },
  thumbnail: {
    type: String,
    autoValue: function() {
      var regex = new RegExp(/img src=[\'"]([^\'"]+)/ig);
      var matches = regex.exec(this.field('html').value);
      if(matches)
        return matches[0];
      else
        return '' ; //defaultImage
    }
  },
  introduction: {
    type: String,
    autoValue: function() {
      var html = this.field('html').value;
      var h1s = html.match(/<p>(.*?)<\/p>/g);
      
      var matches = _.map(h1s, function(val){ return val.replace(/<\/?p>/g,''); });

      if(matches)
        return matches[0];
      else
        return 'default introduction' ; //defaltTitle      
    }
  },
  isPublished: {
    type: Boolean
  }
});

Posts.attachSchema(PostSchema);