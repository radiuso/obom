'use strict';

angular.module('obmApp')
  .service('obomProposalTags', function () {
    this.filter = function(list, tags) {
      if(_.size(tags) > 0) {
        var res = [];

        _.each(list, (poi) => {
          var count = 0;
          
          _.each(poi.tags, function(poiTag) {
            _.each(tags, function(tag) {
              if(poiTag.toUpperCase().indexOf(tag.toUpperCase()) > -1) {
                count++;
              }
            });
          });

          if(count > 0) {
            poi.tagsMatchCount = count;
            res.push(poi);
          }
        });

        return res;
      } else {
        return list;
      }
    };
  });
