/// <reference path="angular.min.js" />

//Creating a module in angular 
var myApp = angular.module("myModule", []);

// Register controller with the module
// $scope is a parameter that is passed to the controller function by angular framework. 
// We attach the model to the $scope object, which will then be available in the view. 
// With in the view, we can retrieve the data from the scope object and display.
//  the model is employee which is a complex object 
myApp.controller("myController", function ($scope) {
    var employee = {
        firstName: "Ben",
        lastName: "Hastings",
        gender: "Male"
    };

    $scope.employee = employee;
});
