/// <reference path="angular.min.js" />

//Creating a module in angular 
const module = angular.module("dataApp", []);


// Register controller with the module
// $scope is a parameter that is passed to the controller function by angular framework. 
// We attach the model to the $scope object, which will then be available in the view. 
// With in the view, we can retrieve the data from the scope object and display.
module.controller("parentCtrl", function ($scope, dataService, apiService) {

    $scope.dataService = dataService
    apiService.getTodos()
});

//This is the simplest Angularjs service type that we can create and use.It is just like a key value pair.Or like a variable that has some value.
// VALUE
module.value("dataService", {
    todos: [],
})

//The service service works same as the factory. But instead of a function it receives a Javascript class/a constructor function as argument.
//service
module.service("apiService", function (globalConstService, dataService, $http) {

    this.getTodos = () => {
        $http.get(globalConstService.url)
            .then(
                // success
                (resp) => {
                    dataService.todos = resp.data
                    console.log(resp.data)
                },
                // error
                (err) => {
                    alert('error')
                    console.log(err)
                }
            )
    }

})

// As it’s name depicts it provides a way for declaring constants in our application and we can use them anywhere needed by just adding it as a dependency.
// There are many areas of application where we want to use constants like some base urls,
// application name, some configurations, etc.So we just define them once and use them anywhere we need.This technique lets us define at one place,
// so that a later change the value doesn’t have us change on all places, we simply just change the value of constant.
// CONSTANT
module.constant("globalConstService", {
    app_name: "JsonAJAX",
    version: 7.5,
    url: `https://jsonplaceholder.typicode.com/todos`
})

