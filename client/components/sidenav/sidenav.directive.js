'use strict';

angular.module('obmApp')
  .directive('obomSidenav', () => ({
    templateUrl: 'components/sidenav/sidenav.html',
    restrict: 'EA',
    controller: 'SidenavController',
    controllerAs: 'sidenav'
  }));
