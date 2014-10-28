/*****************************************************************************/
/* App: The Global Application Namespace */
/*****************************************************************************/
App = {};

if(Meteor.isServer) {
  process.argv = _.without(process.argv, '--keepalive');
  Meteor.startup(function () { console.log("LISTENING"); });
}


/*****************************************************************************/
/* Config: Configuration of details of app */
/* disqus_shortname: your disqus name if not set no disqus is rendered */
/*****************************************************************************/
var Config;

Config = {
  settings: {
    //##### Disqus
    disqus_shortname : Meteor.settings && Meteor.settings.public && Meteor.settings.public.disqus && Meteor.settings.public.disqus.disqus_shortname || '',
    
    //##### AWS
    bucket_images_name: Meteor.settings && Meteor.settings.private && Meteor.settings.private.aws && Meteor.settings.private.aws.bucket_images_name || '',
    bucket_images_region: Meteor.settings && Meteor.settings.private && Meteor.settings.private.aws && Meteor.settings.private.aws.bucket_images_region || '',
    bucket_thumbs_name: Meteor.settings && Meteor.settings.private && Meteor.settings.private.aws && Meteor.settings.private.aws.bucket_thumbs_name || '',
    bucket_thumbs_region:  Meteor.settings && Meteor.settings.private && Meteor.settings.private.aws && Meteor.settings.private.aws.bucket_thumbs_region || '',
    
    //##### ADMIN
    //name: Meteor.settings && Meteor.settings.private && Meteor.settings.private.admin && Meteor.settings.private.admin.name || '',
    //username: Meteor.settings && Meteor.settings.private && Meteor.settings.private.admin && Meteor.settings.private.admin.username || '',
    //email: Meteor.settings && Meteor.settings.private && Meteor.settings.private.admin && Meteor.settings.private.admin.email || '',
    //password: Meteor.settings && Meteor.settings.private && Meteor.settings.private.admin && Meteor.settings.private.admin.password || '',
    
    //##### EMAIL
    //username: Meteor.settings && Meteor.settings.private && Meteor.settings.private.email && Meteor.settings.private.email.username || '',
    //password: Meteor.settings && Meteor.settings.private && Meteor.settings.private.email && Meteor.settings.private.email.password || '',
    //server: Meteor.settings && Meteor.settings.private && Meteor.settings.private.email && Meteor.settings.private.email.server || '',
    //port: Meteor.settings && Meteor.settings.private && Meteor.settings.private.email && Meteor.settings.private.email.port || '',    
    
    //##### Google Analytics
    //See https://github.com/reywood/meteor-iron-router-ga/blob/master/lib/ga.js
  },
  hasValidStringProperty: function(property) {
    return _.isString(property) && !_.isEmpty(property)
  }  
}

this.Config = Config;


if(Meteor.isServer) {
  var email = {
    username: Meteor.settings && Meteor.settings.private && Meteor.settings.private.email && Meteor.settings.private.email.username || '',
    password: Meteor.settings && Meteor.settings.private && Meteor.settings.private.email && Meteor.settings.private.email.password || '',
    server: Meteor.settings && Meteor.settings.private && Meteor.settings.private.email && Meteor.settings.private.email.server || '',
    port: Meteor.settings && Meteor.settings.private && Meteor.settings.private.email && Meteor.settings.private.email.port || ''
  };

  if(Config.hasValidStringProperty(email.username) && 
     Config.hasValidStringProperty(email.password) &&
     Config.hasValidStringProperty(email.server) &&
     Config.hasValidStringProperty(email.port)
    ) {    
    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(email.username) + ':' + encodeURIComponent(email.password) + '@' + encodeURIComponent(email.server) + ':' + email.port;
  }       
  
  var aws = {
    aws_access_key_id : Meteor.settings && Meteor.settings.private && Meteor.settings.private.aws && Meteor.settings.private.aws.aws_access_key_id || '',
    aws_secret_access_key : Meteor.settings && Meteor.settings.private && Meteor.settings.private.aws && Meteor.settings.private.aws.aws_secret_access_key || ''
  };
  
  if(Config.hasValidStringProperty(aws.aws_access_key_id) &&
     Config.hasValidStringProperty(aws.aws_secret_access_key)) {
    
    delete process.env.AWS_ACCESS_KEY_ID;
    delete process.env.AWS_SECRET_ACCESS_KEY;
    
    process.env.AWS_ACCESS_KEY_ID = aws.aws_access_key_id;
    process.env.AWS_SECRET_ACCESS_KEY = aws.aws_secret_access_key;  
  }
}
