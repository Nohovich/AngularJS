/// <reference path="angular.min.js" />
//Notice we are not using $scope anymore with in our controllers, instead, we are using "this" keyowrd.
var app = angular
    .module("Demo", [])
    .controller("countryController", function () {
        this.name = "India";
    })
    .controller("stateController", function () {
        this.name = "Maharashtra";
    })
    .controller("cityController", function () {
        this.name = "Mumbai";
    });