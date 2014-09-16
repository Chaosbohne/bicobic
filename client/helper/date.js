Template.registerHelper('Date', function(submitted) {
  var date = new Date(this.submitted);
  
  var curr_month_index = date.getMonth() ; //Months are zero based    
  var monthNamesShort = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  var month = monthNamesShort[curr_month_index]; 
  var day = date.getDate();
  var year = date.getFullYear();
  
  return month + " "  + day + "th, " + year;
});
