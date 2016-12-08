$(document).ready(function() {
  $('#gh-form').on('submit', function(event) {
  
  var state = document.getElementById('gh-plan-location').value;

  var geocoder = new google.maps.Geocoder();

    event.preventDefault();

    geocoder.geocode({
      'address': state
    }, function(results, status) {
      initMap(results);
    });

  });


  function clearMap() {
    document.getElementById('gh-form').reset();
  }
  
  function initMap(state) {

      // show the map

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
      center: state[0].geometry.location
    });

    var marker = new google.maps.Marker({
      position: state[0].geometry.location,
      map: map
    });

    //clear clear
    clearMap();
  }
  
});
