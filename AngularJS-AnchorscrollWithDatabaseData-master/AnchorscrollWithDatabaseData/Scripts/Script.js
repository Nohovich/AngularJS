/// <reference path="angular.min.js" />

var demoApp = angular.module("demoApp", [])
    .controller("countryController",
        function ($scope, $location, $anchorScroll, $http) {
             // using the get method and passing it the CountryService path(CountryService.asmx/GetData)
            $http.get("CountryService.asmx/GetData")
                //after the get method is dun(success) do this function
                .then(function (response) {
                    $scope.countries = response.data;
                 // if the get method field
                }, function (reason) {
                // the data about the error
                $scope.error = reason.data;
                    $log.info(reason);
                });
            // passing a county name
            $scope.scrollTo = function (countryName) {
                // The hash property is a string beginning with a hash (#), that specifies an anchor name in an HTTP URL.
                $location.hash(countryName);
                // When called, it scrolls to the element related to the specified hash or (if omitted) to the current value of $location.hash
                $anchorScroll();
            }

        });
