	

/*== Asynchronous Loading Google Maps ==============================*/

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}
window.onload = loadScript;

/*-----------------------------------------------------------------*/

/*---------------------------------------------------------------

		
/*== Google Maps settings =========================================*/
/*
 * define the coordinates of your company
 */

lat = 53.860356;
lng = 27.497952; 

var map;
var MY_MAPTYPE_ID = 'custom_style';
 
function initialize() {

	  var featureOpts = [];
	  	 

  
  var myLatlng = new google.maps.LatLng(lat,lng);
  var mapOptions = {
    zoom: 12,
    scrollwheel: false,
    mapTypeControl:false,
    streetViewControl:false,
    center: myLatlng,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
  };
  
  
  
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map
  });
  
  var styledMapOptions = {
		    name: 'Custom Style'
		  };
  
  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions); 
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
}









