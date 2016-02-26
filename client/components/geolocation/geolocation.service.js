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
    }

    // Method for instantiating
    this.$get = function ($q) {
      return new Geolocation($q);
    };
  });
