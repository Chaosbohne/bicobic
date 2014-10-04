Template.registerHelper('Date', function(submitted) { 
  console.log(submitted);
  
  var curr_month_index = submitted.getMonth() ; //Months are zero based    
  var monthNamesShort = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  var month = monthNamesShort[curr_month_index]; 
  var day = submitted.getDate();
  var year = submitted.getFullYear();
  
  return month + " "  + day + "th, " + year;
});
