/// <reference path="angular.min.js" />

//Creating a module in angular 
var module = angular.module("myTimerApp", []);

// Register controller with the module
// $scope is a parameter that is passed to the controller function by angular framework. 
// We attach the model to the $scope object, which will then be available in the view. 
// With in the view, we can retrieve the data from the scope object and display.
module.controller("brotherCtrl", function ($scope, $rootScope) {

    $scope.obj = $rootScope.obj
});

// timeCtrl will be the name to summon this ctrl to the html page
// like class TimeCtrl
module.controller("timeCtrl", function ($scope, $rootScope) {
    // making it reference type
    $rootScope.obj = { x: 10 };

    $scope.obj = $rootScope.obj

    // reference type so the value is going to change to everyone
    $scope.increase = () => {
        $scope.obj.x++
    }
});
