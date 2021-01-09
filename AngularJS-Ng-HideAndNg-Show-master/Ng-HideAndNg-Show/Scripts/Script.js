/// <reference path="angular.min.js" />

//Creating a module in angular 
var myApp = angular.module("myModule", []);

// Register controller with the module
// $scope is a parameter that is passed to the controller function by angular framework. 
// We attach the model to the $scope object, which will then be available in the view. 
// With in the view, we can retrieve the data from the scope object and display.
myApp.controller("myController", function ($scope) {
    var employees = [
        { name: "Ben", gender: "Male", city: "London", salary: 55000 },
        { name: "Sara", gender: "Female", city: "Chennai", salary: 68000 },
        { name: "Mark", gender: "Male", city: "Chicago", salary: 57000 },
        { name: "Pam", gender: "Female", city: "London", salary: 53000 },
        { name: "Todd", gender: "Male", city: "Chennai", salary: 60000 }
    ];

    $scope.employees = employees;
});
