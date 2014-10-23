
/*****************************************************************************/
/* Map: Event Handlers and Helpersss .js*/
/*****************************************************************************/
Template.Map.events({
  /*
   * Example:
   *  'click .selector': function (e, tmpl) {
   *
   *  }
   */
});

Template.Map.helpers({
  /*
   * Example:
   *  items: function () {
   *    return Items.find();
   *  }
   */
});

/*****************************************************************************/
/* Map: Lifecycle Hooks */
/*****************************************************************************/
Template.Map.created = function () {
};

Template.Map.rendered = function () {
  var canvas = this.find('#map-canvas');

  var gmapStyles =   [{
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      { "saturation": -100 },
      { "lightness": -8 },
      { "gamma": 1.18 }
    ]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      { "saturation": -100 },
      { "gamma": 1 },
      { "lightness": -24 }
    ]
  }, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      { "saturation": -100 }
    ]
  }, {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },   {
    "featureType": "administrative",
    "stylers": [
      { "saturation": -100 }
    ]
  }, {
    "featureType": "transit",
    "stylers": [
      { "saturation": -100 }
    ]
  }, {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      { "saturation": -100 }
    ]
  }, {
    "featureType": "road",
    "stylers": [
      { "saturation": -100 }
    ]
  }, {
    "featureType": "administrative",
    "stylers": [
      { "saturation": -100 }
    ]
  }, {
    "featureType": "landscape",
    "stylers": [
      { "saturation": -100 }
    ]
  }, {
    "featureType": "poi",
    "stylers": [
      { "saturation": -100 }
    ]
  }]  ;

  var position = new google.maps.LatLng(51.048674, 13.749437);
  
  var mapOptions = {
    zoom: 14,
    scrollwheel: false,
    panControl: false,
    zoomControl: false,
    scaleControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: gmapStyles,
    center: position
  };   

  map = new google.maps.Map(canvas, mapOptions);

  var pinColor = "F28C83";
  var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
                                             null,
                                             null,
                                             null,
                                             new google.maps.Size(31, 50)
      );  

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h2 id="firstHeading" class="firstHeading">Rico Ruszewski</h2>'+
      '<div id="bodyContent">'+
      '<p><b>Country:</b> Germany</p>'+
      '<p><b>City:</b> 01069 Dresden</p>'+
      '<p><b>Street:</b> Zirkusstraße 6</p>'+
      '<p><a href="https://www.google.de/maps/place/Zirkusstra%C3%9Fe+6,+01069+Dresden/@51.04876,13.74931,17z/data=!3m1!4b1!4m2!3m1!1s0x4709cf5b043a92dd:0x56738bbe6d8f3aec" target="_blank">View on Google Maps</a></p>' +
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });  
  
  var marker = new google.maps.Marker({
    position: position,
    map: map,
    icon: pinImage
  });  
  
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
  
  infowindow.open(map,marker);
};

Template.Map.destroyed = function () {
};


