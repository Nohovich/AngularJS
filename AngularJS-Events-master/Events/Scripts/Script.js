/// <reference path="angular.min.js" />

//Creating a module in angular 
var myApp = angular.module("myModule", []);

// Register controller with the module
// $scope is a parameter that is passed to the controller function by angular framework. 
// We attach the model to the $scope object, which will then be available in the view. 
// With in the view, we can retrieve the data from the scope object and display.
myApp.controller("myController", function ($scope) {
    var technologies = [
        { name: "C#", likes: 0, dislikes: 0 },
        { name: "ASP.NET", likes: 0, dislikes: 0 },
        { name: "SQL", likes: 0, dislikes: 0 },
        { name: "AngularJS", likes: 0, dislikes: 0 }
    ];

    $scope.technologies = technologies;
    // In the controller function we have 2 methods to increment likes and dislikes.
    // Both the functions have the technology object that we want to like or dislike as a parameter. 
    $scope.incrementLikes = function (technology) {
        technology.likes++;
    };

    $scope.incrementDislikes = function (technology) {
        technology.dislikes++;
    };
});

myApp.controller("parentCtrl", ParentCtrl)

//let value1 

// DI dependency injection - IOC
function ParentCtrl($scope, $rootScope) {

    $scope.x = 0

    $scope.$watch('x', function (newX, old) {
        console.log(`old x = ${old} new x = ${newX}`)
        if (newX == 3) {
            //                   ("scenario", data)
            $rootScope.$broadcast("Boom3", "go!")
        }
    })


}

myApp.controller("brotherCtrl", BrotherCtrl)


// DI dependency injection - IOC
function BrotherCtrl($scope, $rootScope) {

    /*
    first solution for auto run of code whenever x is modified
    $scope.everyTime = function() {
        alert("called me....")
        return 10
    }
    */

    $scope.ifIs3 = false;

    // on -- register!
    $rootScope.$on("Boom3",
        // when boom3 happens -- activate this
        function (event, data) {
            // 3 was reached
            console.log(event)
            console.log(data)
            $scope.ifIs3 = true;
        })

}