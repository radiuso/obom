'use strict';

(function() {

class MainController {
  constructor(obomSplinter) {
    this.splinter = obomSplinter;
  }

  suggest() {
    this.splinter.filter([], 100).then(res => {
      if(_.size(res) >= 3) {
        // top 3
        this.proposals = res.slice(1, 4);
      } else {
        this.proposals = res;
      }
    });
  }
}

angular.module('obmApp')
  .controller('MainController', MainController);
})();
