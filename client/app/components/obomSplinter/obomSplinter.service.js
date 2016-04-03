'use strict';

angular.module('obmApp')
  .service('obomSplinter', function ($q, POIService, obomProposalDistance, obomProposalTags) {
    this.filter = function(profile) {
      return POIService.getAll()
      .then(list => {
        // temp to get different results
        return _.shuffle(list);
      })
      .then(list => {
        return obomProposalTags.filter(list, profile.tags);
      })
      .then(list => {
        return obomProposalDistance.filter(list, profile.distanceMax);
      });
    };
  });
