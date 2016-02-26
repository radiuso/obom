'use strict';

angular.module('obmApp')
  .directive('map', function () {
    return {
      templateUrl: 'components/map/map.html',
      restrict: 'EA',
      controller: 'MapController',
      controllerAs: 'vm',
      link: function (scope, element, attrs) {
      }
    };
  });