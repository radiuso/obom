'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket, ThingsService) {
    this.$http = $http;
    this.awesomeThings = [];
    this.thingsService = ThingsService;

    this.thingsService.getAll().then(response => {
      this.awesomeThings = response.data;
      socket.syncUpdates('thing', this.awesomeThings);
    });

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('thing');
    });
  }

  addThing() {
    if (this.newThing) {
      this.thingsService.add({
        name: this.newThing
      });

      this.newThing = '';
    }
  }

  deleteThing(thing) {
    this.thingsService.remove(thing._id);
  }
}

angular.module('obmApp')
  .controller('MainController', MainController);

})();
