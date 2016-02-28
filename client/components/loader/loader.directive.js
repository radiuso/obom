'use strict';

angular.module('obmApp')
  .directive('loader', function ($rootScope, $timeout) {
    return {
      templateUrl: 'components/loader/loader.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        $timeout(function() {
          // let loader = document.getElementById("state_loader");

          $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
              element.addClass("loading");
            });

          $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
              //add a little delay
              $timeout(function(){
                element.removeClass("loading");
              },1000)
            });
        }, 0);
      }
    };
  });
