'use strict';

angular.module('obmApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('poi', {
        url: '/poi',
        templateUrl: 'app/poi/poi.html',
        controller: 'POIController',
        controllerAs: 'poi'
      });
  });
