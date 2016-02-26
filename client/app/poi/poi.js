'use strict';

angular.module('obmApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('poi', {
        url: '/poi',
        templateUrl: 'app/poi/list/list.html',
        controller: 'POIListController',
        controllerAs: 'vm'
      })
      .state('poi-details', {
        url: '/poi/:id',
        templateUrl: 'app/poi/details/details.html',
        controller: 'POIDetailsController',
        controllerAs: 'vm'
      });;
  });
