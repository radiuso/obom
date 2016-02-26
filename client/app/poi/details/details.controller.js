'use strict';

(function() {

class POIDetailsController {
  poi = {};

  constructor($http, $stateParams, $mdToast, POIService, geolocation) {
    this.$http = $http;
    this.POIService = POIService;
    this.geolocation = geolocation;

    this.POIService.get($stateParams.id).then((response) => {
      this.poi = response.data;
      this.geolocation.getLatLng(this.poi.adress).then((position) => {
        this.markers = [{
          id: this.poi._id,
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        }];
      });
    })
    .catch(response => {
      $mdToast.show(
        $mdToast.simple()
          .textContent('POI not found !')
      );
    });
  }
}

angular.module('obmApp')
  .controller('POIDetailsController', POIDetailsController);

})();
