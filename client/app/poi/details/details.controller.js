'use strict';

(function() {

class POIDetailsController {

  constructor($http, $stateParams, $mdToast, POIService, geolocation, TAGService) {
    this.$http = $http;
    this.POIService = POIService;
    this.geolocation = geolocation;
    this.TAGService = TAGService;
    this.$mdToast = $mdToast;

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
    this.TAGService.update(this.poi._id, newTag)
      .catch((err) => {
        this.$mdToast.show(
          this.$mdToast.simple()
            .textContent('Error when trying to add "' + newTag + '"')
        );
      });
  }

  removeTag(oldTag) {
    this.TAGService.remove(this.poi._id, oldTag)
      .catch((err) => {
        this.$mdToast.show(
          this.$mdToast.simple()
            .textContent('Error when trying to delete "' + oldTag + '"')
        );
      });
  }
}

angular.module('obmApp')
  .controller('POIDetailsController', POIDetailsController);

})();
