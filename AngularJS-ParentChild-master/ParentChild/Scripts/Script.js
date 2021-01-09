/// <reference path="angular.min.js" />

//Creating a module in angular 
const module = angular.module("dataApp", [])

module.controller("childCtrl", ChildCtrl)

// DI dependency injection - IOC
function ChildCtrl($scope) {

    $scope.y = 1
    //    $scope.$parent
    //$scope.x = 12
    this.x = 5
}

module.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    //$scope.x = 5;
    this.x = 100
    $scope.value1 = 1
    $rootScope.value1 = 1

}

module.controller("uncleCtrl", UncleCtrl)

// DI dependency injection - IOC
function UncleCtrl($scope, $rootScope) {

    $scope.printValue = function () {
        // how to access parent controller value1
        alert($rootScope.value1)
    }

}

