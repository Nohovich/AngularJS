/// <reference path="angular.min.js" />

//Creating a module in angular 
var myApp = angular.module("myModule", []);

// Register controller with the module
// $scope is a parameter that is passed to the controller function by angular framework. 
// We attach the model to the $scope object, which will then be available in the view. 
// With in the view, we can retrieve the data from the scope object and display.
myApp.controller("myController", function ($scope) {
    var employees = [
        { name: "Ben", gender: 1, salary: 55000 },
        { name: "Sara", gender: 2, salary: 68000 },
        { name: "Mark", gender: 1, salary: 57000 },
        { name: "Pam", gender: 2, salary: 53000 },
        { name: "Todd", gender: 3, salary: 60000 }
    ];

    $scope.employees = employees;
});

// Custom filter in AngularJS Is a function that returns a function
// using the filter function to create a custom filter that converts integer values 1, 2, 3 to Male, Female and Not disclosed respectively.
myApp.filter("gender", function () {
     return function (gender) {
         switch (gender) {
             case 1:
                 return "Male";
             case 2:
                 return "Female";
             case 3:
                 return "Not disclosed";
         }
     }
 });
