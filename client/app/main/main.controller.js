'use strict';

(function() {

class MainController {
  constructor(obomSplinter, $state) {
    this.splinter = obomSplinter;
    this.$state = $state;
  }

  suggest() {
    this.splinter.filter([], 100).then(res => {
      if(_.size(res) >= 3) {
        // top 3
        this.proposals = res.slice(1, 4);
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
