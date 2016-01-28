'use strict';

class SidenavController {

  constructor($mdSidenav) {
    this.$mdSidenav = $mdSidenav;
  }

  close() {
    this.$mdSidenav('obomsidenav').close();
  }
}

angular.module('obmApp')
  .controller('SidenavController', SidenavController);
