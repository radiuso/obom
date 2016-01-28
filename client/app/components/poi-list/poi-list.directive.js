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
        scope.list = [];

        scope.$watch("items", function(newVal) {
          if(newVal) {
            scope.flexSize = parseInt(100 / scope.nbCols);
            var lists = [];
            for(var i = 0; i < scope.nbCols; ++i) {
              lists.push([]);
            }

            scope.items.forEach(function(elem, index) {
              var listsIndex = index % scope.nbCols;
              console.log(listsIndex);
              lists[listsIndex].push(elem);
            });

            scope.list = lists;
          }
        });
      }
    };
  });
