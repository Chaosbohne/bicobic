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
    //Disqus
    disqus_shortname : Meteor.settings && Meteor.settings.public && Meteor.settings.public.disqus && Meteor.settings.public.disqus.disqus_shortname || '',
    //AWS
    bucket_images_name: Meteor.settings && Meteor.settings.public && Meteor.settings.public.aws && Meteor.settings.public.aws.bucket_images_name || '',
    bucket_images_region: Meteor.settings && Meteor.settings.public && Meteor.settings.public.aws && Meteor.settings.public.aws.bucket_images_region || '',
    bucket_thumbs_name: Meteor.settings && Meteor.settings.public && Meteor.settings.public.aws && Meteor.settings.public.aws.bucket_thumbs_name || '',
    bucket_thumbs_region:  Meteor.settings && Meteor.settings.public && Meteor.settings.public.aws && Meteor.settings.public.aws.bucket_thumbs_region || '',
    //ADMIN
    //name: Meteor.settings && Meteor.settings.private && Meteor.settings.private.admin && Meteor.settings.private.admin.name || '',
    //username: Meteor.settings && Meteor.settings.private && Meteor.settings.private.admin && Meteor.settings.private.admin.username || '',
    //email: Meteor.settings && Meteor.settings.private && Meteor.settings.private.admin && Meteor.settings.private.email || '',
    //password: Meteor.settings && Meteor.settings.private && Meteor.settings.private.admin && Meteor.settings.private.password || '',
    
    //Google Analytics
    //See https://github.com/reywood/meteor-iron-router-ga/blob/master/lib/ga.js
  },
  hasValidStringProperty: function(property) {
    return _.isString(property) && !_.isEmpty(property)
  }  
}

this.Config = Config;
