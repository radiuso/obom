'use strict';

(function() {

class MapController {
  constructor(mapConfig, uiGmapIsReady, geolocation, $scope) {
    var vm = this;
    this.geolocation = geolocation;

    // map options
    this.map = mapConfig.map;
    this.user_marker = mapConfig.user_marker;

    $scope.$watch("markers", (newVal) => {
      this.markers = $scope.markers;
    });

    // get the google map instance and create the autocomplete object
    uiGmapIsReady.promise(1).then(function(instances) {
      instances.forEach(function(inst) {
        var imap = inst.map;

        // geocoder
        let geocoder = new google.maps.Geocoder;
        let infowindow = new google.maps.InfoWindow;

        // Autocomplete
        var autoInput = document.getElementById('user_address');
        var autoOptions = {types:["geocode"]};
        imap.controls[google.maps.ControlPosition.TOP_CENTER].push(autoInput);

        let autocomplete = new google.maps.places.Autocomplete(autoInput, autoOptions);
        autocomplete.bindTo('bounds', imap);

        // marker event
        vm.user_marker.events = {
          dragend: function (marker, eventName, args) {
            var pos = marker.getPosition();
            var latlng = {lat: pos.lat(), lng: pos.lng()};

            vm.setPosition(pos.lat(), pos.lng());

            geocoder.geocode({'location': latlng}, function(results, status) {
              if (status === google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                  infowindow.setContent(results[0].formatted_address);
                  infowindow.open(imap, marker);
                } else {
                  window.alert('No results found');
                }
              } else {
                window.alert('Geocoder failed due to: ' + status);
              }
            });
          }
        }
        // event place changed
        autocomplete.addListener('place_changed', () => {
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
          }
          // update the position
          vm.setPosition(place.geometry.location.lat(), place.geometry.location.lng());
        });
      });
    });

    // init the map with the user position
    this.findUserPosition();
  }

  // use the browser geolocation function to find the user lat and lng
  findUserPosition() {
    this.geolocation.detect().then((coords) => {
      this.setPosition(coords.latitude, coords.longitude);
    });
  }

  // update the geoloc position from the given lat and lng
  setPosition(lat, lng) {
    this.geolocation.setPosition(lat, lng);

    this.user_marker.coords.latitude = lat;
    this.user_marker.coords.longitude = lng;

    this.map.center = {
      latitude: lat,
      longitude: lng
    };
  }
}

angular.module('obmApp')
  .controller('MapController', MapController);
})();
