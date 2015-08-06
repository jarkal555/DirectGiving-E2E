'use strict';

angular.module('ngApp')
  .controller('LoginCtrl', function ($scope) {
    $scope.cats = "cats"
    function login(){
      $scope.message = "login registered"
      $scope.loginResult = User.login($scope.credentials,
        function(){
          //success
          $scope.message = "login success"
        },
        function(res){
          $scope.message = "login failure"
          //failure
        });
    };
  });
