'use strict';

angular.module('obmApp', [
  'obmApp.auth',
  'obmApp.admin',
  'obmApp.constants',
  'obmApp.things',
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
  .config(function($urlRouterProvider, $locationProvider, $mdThemingProvider, localStorageServiceProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $mdThemingProvider.theme('default')
      .warnPalette('orange');

    localStorageServiceProvider
      .setPrefix('obom')
      .setStorageType('localStorage') // localStorage or sessionStorage
      ;
  });
