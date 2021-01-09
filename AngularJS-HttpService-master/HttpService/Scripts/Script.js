/// <reference path="angular.min.js" />


var app = angular
    .module("myModule", [])
    // $http service returns a promise object. 
    // This means the functions are executed asynchronously and the data that these functions return may not be available immediately. 
    // Because of this reason you cannot use the return value of the $http service as shown below.
    // passing $http
    .controller("myController", function ($scope, $http) {
        // using the get method and passing it the EmployeeService path(EmployeeService.asmx/GetAllEmployees)
        $http.get("EmployeeService.asmx/GetAllEmployees")
            //after the get method is dun(success) do this function
            .then(function (response) {
                // adding this data to the scope
                $scope.employees = response.data;
                // if the get method field
            }, function (reason) {
                // the data about the error
                $scope.error = reason.data;
                    $log.info(reason);
            });

    });