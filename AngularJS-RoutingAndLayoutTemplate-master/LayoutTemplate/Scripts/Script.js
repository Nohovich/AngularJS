


// creating the module and passing the(ngRoute)
var app = angular.module("Demo", ["ngRoute"])
// $routeProvider: the method(when(path, route)) Adds a new route definition to the $route service.
// $locationProvider: Use to configure how the application deep linking paths are stored.
    .config(function ($routeProvider, $locationProvider)
    {

        $routeProvider
            // when the url ends with home show this template
            .when("/home", {
                templateUrl: "Templates/home.html",
                controller: "homeController",
                // To make the route case-insensitive
                caseInsensitiveMatch: true
            })
            // when the url ends with home show this template
            .when("/courses", {
                templateUrl: "Templates/courses.html",
                controller: "coursesController",
                caseInsensitiveMatch: true
            })
            // when the url ends with home show this template
            .when("/students", {
                templateUrl: "Templates/students.html",
                controller: "studentsController",
                caseInsensitiveMatch: true
            })
            .when("/students/:id", {
                templateUrl: "Templates/studentDetails.html",
                controller: "studentDetailsController",
                caseInsensitiveMatch: true
            })
            //  redirect to default route if the user is trying to navigate to a route that is not configured.
            .otherwise({
                redirectTo: "/home",
                caseInsensitiveMatch: true
            })
        // after we do this
        $locationProvider.html5Mode(true);
        // we can remove # symbols from all the links(index.html)
    })
    .controller("homeController", function ($scope) {
        $scope.message = "Home Page";
    })
    .controller("coursesController", function ($scope) {
        $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
    })
    .controller("studentsController", function ($scope, $http) {

        $http.get("StudentService.asmx/GetAllStudents")
            .then(function (response) {
                $scope.students = response.data;
            })
    })
    .controller("studentDetailsController", function ($scope, $http, $routeParams) {
        $http({
            url: "StudentService.asmx/GetStudent",
            method: "get",
            params: { id: $routeParams.id }
        }).then(function (response) {
            $scope.student = response.data;
        })

    })


