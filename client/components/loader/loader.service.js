'use strict';

angular.module('obmApp')
  .provider('loader', function () {

    // Private constructor
    function Loader(scope) {
      this.loadStart = function() {
        scope.$broadcast('loadStart');
      };

      this.loadEnd = function() {
        scope.$broadcast('loadEnd');
      };
    }

    // Method for instantiating
    this.$get = function ($rootScope) {
      return new Loader($rootScope);
    };
  });
