'use strict';

angular.module('obmApp.auth', [
  'obmApp.constants',
  'obmApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
