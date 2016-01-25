(function() {
  'use strict';
  angular
      .module('obmApp.things')
      .factory('ThingsService', ThingsService);

  ThingsService.$inject = ['$http'];

  function ThingsService($http) {
      return {
          getAll: getAll,
          getOne: getOne,
          add: add,
          remove: remove
      };
      this.$http.delete('/api/things/' + thing._id);

      function getAll() {
          return $http.get('/api/things')
              .catch(getAllFailed);

          function getAllFailed(error) {
          }
      }

      function getOne(thingId) {
        return $http.get('/api/things/' + thingId)
          .catch(getOneFailed);

        function getOneFailed(error) {
        }
      }

      function add(thing) {
        return $http.post('/api/things', thing);
      }

      function remove(thingId) {
        return $http.delete('/api/things/' + thingId);
      }
  }
})();
