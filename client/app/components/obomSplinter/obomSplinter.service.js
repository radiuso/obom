'use strict';

angular.module('obmApp')
  .service('obomSplinter', function ($q, POIService, obomProposalDistance, obomProposalTags) {
    this.filter = function(tags, distance) {
      return POIService.getAll()
      .then(list => {
        // temp to get different results
        return _.shuffle(list);
      })
      .then(list => {
        return obomProposalTags.filter(list, tags);
      })
      .then(list => {
        return obomProposalDistance.filter(list, distance);
      });
    };
  });
