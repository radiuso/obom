'use strict';

(function() {

class POIDetailsController {
  poi = {};

  constructor($http, $stateParams, $mdToast, POIService, geolocation, TAGService) {
    this.$http = $http;
    this.POIService = POIService;
    this.geolocation = geolocation;
    this.TAGService = TAGService;

    this.POIService.get($stateParams.id).then((poi) => {
      this.poi = poi;

      this.geolocation.getLatLng(this.poi.adress + " " + this.poi.city).then((position) => {
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

  addTag(newTag) {
    console.log(newTag);
    this.TAGService.update(this.poi._id, {
      poi: this.poi._id,
      name: newTag
    });
  }

  removeTag(oldTag) {
    // this.TagService.remove({
    //   poi: this.poi._id,
    //   tag: tag
    // });
  }
}

angular.module('obmApp')
  .controller('POIDetailsController', POIDetailsController);

})();
