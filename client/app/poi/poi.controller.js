'use strict';

(function() {

class POIController {

  constructor($http, $scope, socket, POIService) {
    this.$http = $http;
    this.POIService = POIService;

    this.POIService.getAll().then(response => {
      this.poiList = response.data;
      socket.syncUpdates('poi', this.poiList);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('poi');
    });
    
  }
}

angular.module('obmApp')
  .controller('POIController', POIController);

})();
