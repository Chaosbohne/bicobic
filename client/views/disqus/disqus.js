Template.disqus.rendered = function() {
  
  
  Session.set("loadDisqus", true);
  
  return typeof DISQUS !== "undefined" && DISQUS !== null ? DISQUS.reset({
    reload: true,
    config: function() {}
  }) : void 0;
  
  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
        /*var disqus_shortname = 'bicobic'; // required: replace example with your forum shortname


        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
        */
};

/*
Template.disqus.destroyed = function() {
  Session.set("loadDisqus", false);
}*/