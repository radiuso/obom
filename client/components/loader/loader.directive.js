'use strict';

angular.module('obmApp')
  .directive('loader', function ($rootScope, $timeout) {
    return {
      templateUrl: 'components/loader/loader.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        $rootScope.$on('$stateChangeStart', function() {
          loadStart();
        });

        $rootScope.$on('$stateChangeSuccess', function() {
            loadEnd();
        });

        $rootScope.$on('loadStart', function () {
          loadStart();
        });

        $rootScope.$on('loadEnd', function () {
          loadEnd();
        });

        function loadStart() {
          element.removeClass("loaded");
        }
        function loadEnd() {
          $timeout(function(){
            element.addClass("loaded");
          },1000);
        }
      }
    };
  });
