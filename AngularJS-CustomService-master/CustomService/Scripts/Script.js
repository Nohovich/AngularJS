/// <reference path="angular.min.js" />

 //Creating a module in angular 
var app = angular.module("myModule", [])
    // Register controller with the module
    // adding scope and then adding the custom service(stringService)
    .controller("myController", function ($scope, stringService) {
        $scope.transformString = function (input) {
            $scope.output = stringService.processString(input);
        };
    });