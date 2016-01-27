'use strict';

angular.module('obmApp')
  .directive('obomSidenav', () => ({
    templateUrl: 'components/sidenav/sidenav.html',
    restrict: 'E',
    controller: 'SidenavController',
    controllerAs: 'sidenav'
  }));
