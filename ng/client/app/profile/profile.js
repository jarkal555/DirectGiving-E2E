'use strict';

angular.module('ngApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: 'profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl'
      });
  });