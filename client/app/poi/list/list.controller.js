'use strict';

(function() {

class POIListController {

  constructor($http, $scope, socket, POIService) {
    this.$http = $http;
    this.POIService = POIService;

    this.POIService.getAll().then(pois => {
      this.poiList = pois;
      socket.syncUpdates('poi', this.poiList);
    });

    this.poiActions = [{
      icon: 'map',
      href: function(poi) {
        return "poi-details({id: '" + poi._id + "'})";
      }
    }];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('poi');
    });
  }
}

angular.module('obmApp')
  .controller('POIListController', POIListController);

})();
