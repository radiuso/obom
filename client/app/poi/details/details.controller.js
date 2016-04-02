'use strict';

(function() {

class POIDetailsController {

  constructor($http, $stateParams, $mdToast, POIService, geolocation, TAGService) {
    this.$http = $http;
    this.POIService = POIService;
    this.geolocation = geolocation;
    this.TAGService = TAGService;

    this.POIService.get($stateParams.id).then((poi) => {
      this.poi = poi;
      this.poiAdress = this.poi.adress + ' ' + this.poi.city;
    })
    
    .catch(response => {
      $mdToast.show(
        $mdToast.simple()
          .textContent('POI not found !')
      );
      console.log('Error : ' + response);
    });
  }

  addTag(newTag) {
    this.TAGService.update(this.poi._id, newTag);
  }

  removeTag(oldTag) {
    this.TAGService.remove(this.poi._id, oldTag);
  }
}

angular.module('obmApp')
  .controller('POIDetailsController', POIDetailsController);

})();
