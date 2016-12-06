    
$(document).ready(function() {
  //google.maps.event.addDomListener(window, 'load', initMap);
    event.preventDefault();
	function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom:8
    });
   }
});
