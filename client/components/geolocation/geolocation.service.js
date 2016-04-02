'use strict';

angular.module('obmApp')
  .provider('geolocation', function () {

    // Private constructor
    function Geolocation($q) {
      this.coords = {
        latitude: 0,
        longitude: 0
      };

      this.detect = function() {
        var vm = this;
        return $q(function(resolve, reject) {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position) {
                resolve(position);
              });
          } else {
            reject('Not supported');
          }
        }).then(function(position) {
          vm.coords = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };

          return vm.coords;
        });
      };

      this.setPosition = function(lat, lng) {
        this.coords.latitude = lat;
        this.coords.longitude = lng;
      };

      this.getLatLng = function(adress) {
        var geocoder = new google.maps.Geocoder();
        return $q(function(resolve, reject) {
          geocoder.geocode( { 'address': adress}, function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results[0].geometry.location.lat();
                var longitude = results[0].geometry.location.lng();

                resolve({
                  coords: {
                    latitude: latitude,
                    longitude: longitude
                  }
                });
              } else {
                reject(adress);
              }
          });
        });
      };

      this.getDirection = function(request) {
        var directionsService = new google.maps.DirectionsService();
        
        return $q(function(resolve, reject) {
          directionsService.route(request, function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
              resolve(result);
            } else {
              reject(result);
            }
          });
        });
      }
    }

    // Method for instantiating
    this.$get = function ($q) {
      return new Geolocation($q);
    };
  });
