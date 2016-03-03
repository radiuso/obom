'use strict';

(function() {

function HttpCacheService($http, $q, localStorageService) {
  var HttpCache = {
    get: function(key, uri) {
      return $q(function(resolve, reject) {
        var localValue = localStorageService.get(key);

        if(_.isNil(localValue)) {
          $http.get(uri)
            .then(function(response) {
              localStorageService.set(key, response.data);
              resolve(response.data);
            })
            .catch(function(error) {
              reject(error);
            });
        } else {
          resolve(localValue);
        }
      });
    },
    getIn: function(key, id, uri) {
      return $q(function(resolve, reject) {
        var localValue = localStorageService.get(key);
        var lv_index = _.findIndex(localValue, function(lv) {
          return lv._id === id;
        });

        if(lv_index <= 0) {
          $http.get(uri + '/' + id).then(function(response) {
            resolve(response.data);
          })
          .catch(function(error) {
            reject(error);
          });
        } else { // is in cache
          resolve(localValue[lv_index]);
        }
      });
    },
    update: function(key, id, uri) {
      return $q(function(resolve, reject) {
        var localValue = localStorageService.get(key);
        var lv_index = _.findIndex(localValue, function(lv) {
          return lv._id === id;
        });

        if(lv_index > 0) {
          $http.put(uri + '/' + id).then(function(response) {
            localValue[lv_index] = response.data;
            localStorageService.remove(key);
            localStorageService.set(key, localValue);
            resolve(response.data);
          })
          .catch(function(error) {
            reject(error);
          });
        } else { // is in cache
          resolve('Element not found in local Storage');
        }
      });
    },
    delete: function(key, id, uri) {
      return $q(function(resolve, reject) {
        var localValue = localStorageService.get(key);
        var lv_index = _.findIndex(localValue, function(lv) {
          return lv._id === id;
        });

        if(lv_index > 0) {
          $http.delete(uri + '/' + id).then(function(response) {
            localValue[lv_index] = response.data;
            localStorageService.remove(key);
            localStorageService.set(key, localValue);
            resolve(response.data);
          })
          .catch(function(error) {
            reject(error);
          });
        } else { // is in cache
          resolve('Element not found in local Storage');
        }
      });
    }
  };

  return HttpCache;
}

angular.module('obmApp.util')
  .factory('HttpCache', HttpCacheService);

})();
