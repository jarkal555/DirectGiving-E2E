'use strict';

angular.module('ngApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('causes', {
        url: '/causes',
        templateUrl: 'app/causes/causes.html',
        controller: 'CausesCtrl'
      });
  });