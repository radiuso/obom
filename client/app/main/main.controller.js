'use strict';

(function() {

class MainController {
  constructor(obomSplinter, $state) {
    this.splinter = obomSplinter;
    this.$state = $state;
    this.profile = {
      tags: ['restaurant']
    };
  }

  suggest(form) {
    this.splinter.filter(this.profile).then(res => {
      console.log(res);
      if(_.size(res) >= 3) {
        // top 3
        this.proposals = res.slice(0, 3);
      } else {
        this.proposals = res;
      }
      return this.proposals;
    }).then(proposals => {
      console.log(proposals);
      // set markers from lat and lng
    });
  }

  choose(poi) {
    // query
    // redirect to poi details
    this.$state.go('poi-details', {id: poi._id});
  }
}

angular.module('obmApp')
  .controller('MainController', MainController);
})();
