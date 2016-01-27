'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth, $mdSidenav) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.sidenav = $mdSidenav;
  }

  toggleSidenav() {
    console.log("toggle");
    this.sidenav('obomsidenav').toggle()
    .then(function () {
    });
  }
}

angular.module('obmApp')
  .controller('NavbarController', NavbarController);
