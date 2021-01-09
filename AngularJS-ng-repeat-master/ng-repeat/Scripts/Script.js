/// <reference path="angular.min.js" />

//Creating a module in angular 
var myApp = angular.module("myModule", []);

// Register controller with the module
// $scope is a parameter that is passed to the controller function by angular framework. 
// We attach the model to the $scope object, which will then be available in the view. 
// With in the view, we can retrieve the data from the scope object and display.
myApp.controller("myController", function ($scope) {
    var countries = [
        {
            name: "UK",
            cities: [
                { name: "London" },
                { name: "Birmingham" },
                { name: "Manchester" }
            ]
        },
        {
            name: "USA",
            cities: [
                { name: "Los Angeles" },
                { name: "Chicago" },
                { name: "Houston" }
            ]
        },
        {
            name: "India",
            cities: [
                { name: "Hyderabad" },
                { name: "Chennai" },
                { name: "Mumbai" }
            ]
        }
    ];

    $scope.countries = countries;
});
