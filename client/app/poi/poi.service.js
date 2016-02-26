(function() {
  'use strict';
  angular
    .module('obmApp')
    .factory('POIService', POIService);

  POIService.$inject = ['$http'];

  function POIService($http) {
    return {
      getAll: getAll,
      get: get
    };

    function getAll() {
      return $http.get('/api/poi')
        .catch(getAllFailed);

      function getAllFailed(error) {
        console.log(error);
      }
    }

    function get(id) {
      return $http.get('/api/poi/' + id);
    }

  }
})();
