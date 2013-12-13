Template.ganalytics.rendered = function() {
  /*
  (function(i,s,o,g,r,a,m){
    i['GoogleAnalyticsObject']=r;
    i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)
    }, i[r].l=1*new Date();
                           a=s.createElement(o),m=s.getElementsByTagName(o)[0];
                           a.async=1;
                           a.src=g;
                           m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46459921-1', 'bicobic.com');
  ga('send', 'pageview');
  */
  
  if(!isGanalyticsLoaded) {
    window['GoogleAnalyticsObject']='ga';
    window['ga']=window['ga']||function(){
      (window['ga'].q=window['ga'].q||[]).push(arguments)
    }, window['ga'].l=1*new Date();    
    
    var myGAJs = document.createElement('script'),
        s = document.getElementsByTagName('script')[0];
    myGAJs.async = true;
    myGAJs.src = '//www.google-analytics.com/analytics.js';
    
    myScriptLoader(myGAJs, function funcEventLoaded() {
      var myCallback = function funcMyCallback() {
        isGanalyticsLoaded = true;
        ga('create', 'UA-46459921-1', 'bicobic.com');
        ga('send', 'pageview');        
      };
    });
    
    
    s.parentNode.insertBefore(myGAJs, s);
  }
}

var isGanalyticsLoaded = false;
var myScriptLoader = function funcMyScriptLoader(jsEl, callback) {
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