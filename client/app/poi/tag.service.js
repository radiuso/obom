(function() {
  'use strict';
  angular
    .module('obmApp')
    .factory('TAGService', TAGService);

  TAGService.$inject = ['$http', 'HttpCache'];

  function TAGService($http, HttpCache) {
    return {
      getAll: getAll,
      get: get,
      update: update,
      remove: remove,
    };

    function getAll() {
      return $http.get('/api/tags');
    }

    function get(id) {
      return $http.get('/api/tags/' + id);
    }

    function update(id, tag){
      return HttpCache.update('poi', id, '/api/tags/' + tag);
    }

    function remove(id, tag){
      return HttpCache.delete('poi', id, '/api/tags/' + tag);
    }
  }
})();
