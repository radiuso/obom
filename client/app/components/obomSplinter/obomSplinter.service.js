'use strict';

angular.module('obmApp')
  .service('obomSplinter', function ($q, POIService, obomProposalDistance, obomProposalTags, geolocation) {
    this.filter = function(profile) {
      return POIService.getAll()
      .then(list => {
        return obomProposalTags.filter(list, profile.tags);
      })
      .then(list => {
        return obomProposalDistance.filter(list, geolocation.coords, profile.distanceMax);
      })
      .then(list => {
        // order by tags match and distance
        return _.orderBy(list, ['distance', 'tagsMatchCount', 'minRate'], ['asc', 'desc', 'desc']);
      });
    };
  });
