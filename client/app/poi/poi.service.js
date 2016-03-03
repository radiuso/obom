(function() {
  'use strict';
  angular
    .module('obmApp')
    .factory('POIService', POIService);

  POIService.$inject = ['$http', 'HttpCache'];

  function POIService($http, HttpCache) {
    return {
      getAll: getAll,
      get: get
    };

    function getAll() {
      return HttpCache.get('poi', '/api/poi');
    }

    function get(id) {
      return HttpCache.getIn('poi', id, '/api/poi');
    }
  }
})();
