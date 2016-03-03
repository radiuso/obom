(function() {
  'use strict';
  angular
    .module('obmApp')
    .factory('TAGService', TAGService);

  TAGService.$inject = ['$http'];

  function TAGService($http) {
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
      return $http.patch('/api/tags/' + id, tag);
    }

    function remove(id, tag){
      return $http.delete('/api/tags/' + id + '/' + tag);
    }
  }
})();
