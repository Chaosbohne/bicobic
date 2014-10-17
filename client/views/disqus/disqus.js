var isDisqusLoaded = false,
    myScriptLoader = function funcMyScriptLoader(jsEl, callback) {
      if (window.attachEvent) {
        // for IE (sometimes it doesn't send loaded event but only complete)
        jsEl.onreadystatechange = function funcOnReadyStateChange() {
          if (jsEl.readyState === 'complete') {
            jsEl.onreadystatechange = "";
          } else if (jsEl.readyState === 'loaded') {
            jsEl.onreadystatechange = "";
          }

          if (typeof callback === 'function') {
            callback();
          }
        };
      } else {
        // most browsers
        jsEl.onload = function funcOnLoad () {
          if (typeof callback === 'function') {
            callback();
          }
        };
      }
    };


/*****************************************************************************/
/* Disqus: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Disqus.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Disqus.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Disqus: Lifecycle Hooks */
/*****************************************************************************/
Template.Disqus.created = function () {
};

Template.Disqus.rendered = function () {
  //because the url can change the disqus config has to be attached to use the post id as unique identifier and a unique url
  //check docu: https://help.disqus.com/customer/portal/articles/472098-javascript-configuration-variables
  
  var pathArray, protocol, host, subhost, post, url;
  
  pathArray = window.location.href.split( '/' );
  protocol = pathArray[0];
  host = pathArray[2];
  subhost = pathArray[3];
  post = this.data;
  url = protocol + '//' + host + '/' + subhost + '/' + post._id;

  console.log(protocol + '//' + host + '/' + subhost + '/' + post._id);
  
  if(post._id && post.title && url ){
  if(typeof window.DISQUS !== "undefined" && window.DISQUS !== null) {
    return window.DISQUS.reset({
      reload: true,
      config: function() {
        this.page.identifier = post._id;
        this.page.title = post.title;
        this.page.url = url;
      }
    });
  } else {
      disqus_shortname = 'rico-ruszewski';
      disqus_identifier = post._id;
      disqus_title = post.title;
      disqus_url = url;
      disqus_developer = 1;
      dsq = null;
    dsq = document.createElement('script');
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  }
}

  
/*
  var post = this.data;  
  
  //Disqus loaded
  if(typeof window.DISQUS !== "undefined" && window.DISQUS !== null) {
    console.log('loaded');
    return window.DISQUS.reset({
      reload: true,
      config: function() {
        this.page.identifier = post._id;
        this.page.title = post.title;
        this.page.url = window.location.href;
        
      }
    });    
  //Disqus not loaded
  }else {
    console.log('not loaded');
    var dsq = document.createElement('script'),
      disqus_shortname = 'rico-ruszewski',
      disqus_identifier = post._id,
      disqus_title = post.title,
      disqus_url = window.location.href;        
    dsq.type = 'text/javascript';
    dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);    
  }
  */
};

Template.Disqus.destroyed = function () {
};


