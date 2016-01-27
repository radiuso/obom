'use strict';

class SidenavController {

  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
  }

  close() {
    console.log("test");
    this.$mdSidenav('obomsidenav').close();
  }
}

angular.module('obmApp')
  .controller('SidenavController', SidenavController);
