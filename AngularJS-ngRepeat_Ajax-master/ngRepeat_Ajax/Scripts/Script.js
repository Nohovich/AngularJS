/// <reference path="angular.min.js" />

//Creating a module in angular 
const module = angular.module("dataApp", []);

// Register controller with the module
// $scope is a parameter that is passed to the controller function by angular framework. 
// We attach the model to the $scope object, which will then be available in the view. 
// With in the view, we can retrieve the data from the scope object and display.
module.controller("parentCtrl", function ($scope, $http)
{
    $scope.todos = []
    //ajax get
    $http.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(
            // success
            (resp) => {
                $scope.todos = resp.data
            },
            // error
            (err) => {
                alert('error')
                console.log(err)
            }
        )
});
