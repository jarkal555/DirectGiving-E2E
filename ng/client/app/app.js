'use strict';

angular.module('ngApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'lbServices',
  'AuthService',
  'contentful'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

angular
  .module('ngApp')
  .config(function(contentfulProvider){
    contentfulProvider.setOptions({
        space: 'eqqaqniduvbt',
        accessToken: 'de0bd815c7d10bfdd7afa640421b3e7b69217a438dfa65c0b6ad4102f0806f0e'
    });
  });

//logging
angular.module('logExample', [])
.controller('LogController', ['$scope', '$log', function($scope, $log) {
  $scope.$log = $log;
}]);
