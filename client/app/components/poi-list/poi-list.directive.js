'use strict';

angular.module('obmApp')
  .directive('poiList', function ($parse) {
    return {
      templateUrl: 'app/components/poi-list/poi-list.html',
      replace: true,
      restrict: 'E',
      scope: {
        items: "=",
        nbCols: "="
      },
      link: function (scope, element, attrs) {
        
      }
    };
  });
