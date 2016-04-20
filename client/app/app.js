'use strict';

angular.module('obmApp', [
  'obmApp.auth',
  'obmApp.admin',
  'obmApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'validation.match',
  'ngMaterial',
  'ngMessages',
  'uiGmapgoogle-maps',
  'LocalStorageModule'
])
  .config(function($urlRouterProvider, $locationProvider, $mdThemingProvider, localStorageServiceProvider, $mdIconProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
      .warnPalette('orange');

    localStorageServiceProvider
      .setPrefix('obom')
      .setStorageType('localStorage') // localStorage or sessionStorage
      ;

    $mdIconProvider
      .defaultIconSet('assets/images/mdi.svg');
  })
  .run(function(loader, POIService) {
    POIService.getAll().then((response) => {

    });
  });
