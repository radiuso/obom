'use strict';

angular.module('obmApp')
  .service('obomSplinter', function ($q, POIService, obomProposalDistance, obomProposalTags) {
    this.filter = function(tags, distance) {
      this.poiService.getAll()
      .then(function(list) {
        return obomProposalTags.filter(list, tags);
      })
      .then(function(list) {
        return obomProposalDistance.filter(list, distance);
      });
    };
  });
