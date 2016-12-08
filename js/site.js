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
			showInfo(state);
  });


  function clearMap() {
    document.getElementById('gh-form').reset();
  }
  
  function initMap(state) {

      // show the map

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: state[0].geometry.location
    });

    var marker = new google.maps.Marker({
      position: state[0].geometry.location,
      map: map
    });

    //clear clear
    clearMap();
  }

	function showInfo(info) {
		$.get (
			if(info == 'san francisco' ) {
				var show = '<ul id="plan-show">' +
				'<li class="info-label" id="plan-name">San Francisco, California</li>' +
				'<li class="info-label" id="plan-date">Date: Dec, 14th - Dec, 17th</li>';
			}

			$('#primary').append(show);
		);
		event.preventDefault();
	}
  
});
