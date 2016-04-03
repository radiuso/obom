'use strict';

angular.module('obmApp')
  .service('obomProposalDistance', function () {
    this.filter = function(list, position, distanceMax) {
      // var res = [];
      // _.each(list, (elem) => {
      //   var distance = elem.coordinates.latitude - position.latitude;
      //   distance += elem.coordinates.longitude - position.longitude;
      //
      //   if(distance <= distanceMax) {
      //     res.distance = distance;
      //     res.push(elem);
      //   }
      // });

      return list;
    };
  });
