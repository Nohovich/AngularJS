/// <reference path="angular.min.js" />

//Creating a module in angular 
var myApp = angular.module("myModule", []);

// Register controller with the module
// $scope is a parameter that is passed to the controller function by angular framework. 
// We attach the model to the $scope object, which will then be available in the view. 
// With in the view, we can retrieve the data from the scope object and display.
myApp.controller("myController", function ($scope) {
    var employees = [
        { name: "Ben", gender: "Male", salary: 55000 },
        { name: "Sara", gender: "Female", salary: 68000 },
        { name: "Mark", gender: "Male", salary: 57000 },
        { name: "Pam", gender: "Female", salary: 53000 },
        { name: "Todd", gender: "Male", salary: 60000 }
    ];

    $scope.employees = employees;
    // employeeList property attached to the $scope object.
    //This property points to the EmployeeList.html file that we want to reuse.
    $scope.employeeList = "EmployeeList.html";
    // attaches employeeView property to the $scope object and sets it to EmployeeTable.html.
    // This means when the page is initially loaded the employee data will be presented using a table.
    $scope.employeeView = "EmployeeTable.html";
});
