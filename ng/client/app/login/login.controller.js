'use strict';

angular.module('ngApp')
  .controller('LoginCtrl', function ($scope) {
    function login(){
      $log.log("hello");
      $scope.loginResult = User.login($scope.credentials,
        function(){
          //success
        },
        function(res){
          //failure
        });
    };
  });
