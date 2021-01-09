/// <reference path="angular.min.js" />

//Creating a module in angular 
var myApp = angular.module("myModule", []);

// Register controller with the module
// $scope is a parameter that is passed to the controller function by angular framework. 
// We attach the model to the $scope object, which will then be available in the view. 
// With in the view, we can retrieve the data from the scope object and display.
myApp.controller("myController", function ($scope) {
    var employees = [
        {
            name: "Ben", dateOfBirth: new Date("November 23, 1980"),
            gender: "Male", salary: 55000
        },
        {
            name: "Sara", dateOfBirth: new Date("May 05, 1970"),
            gender: "Female", salary: 68000
        },
        {
            name: "Mark", dateOfBirth: new Date("August 15, 1974"),
            gender: "Male", salary: 57000
        },
        {
            name: "Pam", dateOfBirth: new Date("October 27, 1979"),
            gender: "Female", salary: 53000
        },
        {
            name: "Todd", dateOfBirth: new Date("December 30, 1983"),
            gender: "Male", salary: 60000
        }
    ];

    $scope.employees = employees;
    // start values
    $scope.sortColumn = "name";
    $scope.reverseSort = false;

    // when pressing on one of the table headers this method will run
    $scope.sortData = function (column) {
        // Boll
        $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
        $scope.sortColumn = column;
    }

    $scope.getSortClass = function (column) {

        if ($scope.sortColumn == column) {

            return $scope.reverseSort ? 'arrow-down': 'arrow-up';
        }

        return '';
    }
});
