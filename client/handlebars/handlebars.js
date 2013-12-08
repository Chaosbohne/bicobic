Handlebars.registerHelper('shortDate', function(submitted) {
  var d = new Date(this.submitted);
  var curr_date = d.getDate();
  var curr_month = d.getMonth() + 1; //Months are zero based
  var curr_year = d.getFullYear();
  return curr_date + "-" + curr_month + "-" + curr_year;  
});

Handlebars.registerHelper('longDate', function(submitted) {
  var d = new Date(this.submitted);
  var curr_date = d.getDate();
  var curr_month = d.getMonth() + 1; //Months are zero based
  var curr_year = d.getFullYear();
  var curr_hour = d.getHours();
  if(d.getHours() < 10) 
    curr_hour = "0" + d.getHours();
  else
    curr_hour = d.getHours();
  
  var curr_min;
  if(d.getMinutes() < 10)
    curr_min = "0" + d.getMinutes();
  else
    curr_min = d.getMinutes();
  
  return curr_date + "-" + curr_month + "-" + curr_year + " " + " " + curr_hour + ":" + curr_min;  
});

Handlebars.registerHelper('giveMonth', function(submitted) {
  var d = new Date(this.submitted);
  var curr_month = d.getMonth() ; //Months are zero based    
  var monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return monthNamesShort[curr_month];        
});

Handlebars.registerHelper('giveDay', function(submitted) {
  var d = new Date(this.submitted);
  var curr_day = d.getDay();
  return curr_day;            
});

Handlebars.registerHelper('isAdmin', function() {
  var user = Meteor.user();
  if(!user || !(user.profile.role === 'admin')){
      return false;
  }  
  return true;
});