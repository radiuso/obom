'use strict';

(function() {

class MapController {
  constructor(mapConfig, uiGmapIsReady, geolocation, $scope) {
    var vm = this;
    this.geolocation = geolocation;

    // map options
    this.map = mapConfig.map;
    this.user_marker = mapConfig.user_marker;
    this.imap = {};
    this.markers = [];

    $scope.$watch("markers", (newVal) => {
      if(newVal) {
        this.markers = $scope.markers;
      }
    });

    // get the google map instance and create the autocomplete object
    uiGmapIsReady.promise(1).then((instances) => {
      var inst = instances[0];
      this.imap = inst.map;

      // geocoder
      let geocoder = new google.maps.Geocoder;
      let infowindow = new google.maps.InfoWindow;

      // Autocomplete
      var autoInput = document.getElementById('user_address');
      var autoOptions = {types:["geocode"]};
      this.imap.controls[google.maps.ControlPosition.TOP_CENTER].push(autoInput);

      let autocomplete = new google.maps.places.Autocomplete(autoInput, autoOptions);
      autocomplete.bindTo('bounds', this.imap);

      // marker event
      vm.user_marker.events = {
        dragend: function (marker, eventName, args) {
          var pos = marker.getPosition();
          var latlng = {lat: pos.lat(), lng: pos.lng()};

          vm.setPosition(pos.lat(), pos.lng());

          geocoder.geocode({'location': latlng}, (results, status) => {
            if (status === google.maps.GeocoderStatus.OK) {
              if (results[0]) {
                infowindow.setContent(results[0].formatted_address);
                infowindow.open(this.imap, marker);
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

    // fit bounds
    if (!_.isNil(this.imap)) {
      var bounds = new google.maps.LatLngBounds();
      bounds.extend(new google.maps.LatLng(lat, lng));

      for (var i=0; i<this.markers.length; i++) {
        bounds.extend(new google.maps.LatLng(
          this.markers[i].coords.latitude,
          this.markers[i].coords.longitude)
        );
      }
      console.log("not nil");
      this.imap.fitBounds(bounds);
    } else {
      this.map.center = {
        latitude: lat,
        longitude: lng
      };
      imap.setZoom(17);  // Why 17? Because it looks good.
    }
  }
}

angular.module('obmApp')
  .controller('MapController', MapController);
})();
