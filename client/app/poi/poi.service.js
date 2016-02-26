(function() {
  'use strict';
  angular
    .module('obmApp')
    .factory('POIService', POIService);

  POIService.$inject = ['$http'];

  function POIService($http) {
    return {
      getAll: getAll
    };

    function getAll() {
      return $http.get('/api/poi')
        .catch(getAllFailed);

      function getAllFailed(error) {
        console.log(error);
      }
    }

  }
})();
