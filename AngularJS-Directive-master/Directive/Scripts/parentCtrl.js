//let value1 

module.controller("parentCtrl", ParentCtrl)

// DI dependency injection - IOC
function ParentCtrl($scope) {
    $scope.x = 10
    $scope.clickme = () => {
        alert('click!')
    }
}

// seperate file - my.directive.js
module.directive('directiveName', function () {
    return {
        restrict: 'AE',
        scope: {
            title: '@',
            y: '=',
            clickFunc: '&'
        },
        templateUrl: 'Page/dir',
        link: function (scope) {
            scope.clickit = () => {
                scope.clickFunc()()
            }
        }
    }
});
/*
 <div class="title"><h2>{{title}}</h2></div>
 <div class="title"><h2>TWO WAY : <input type="number" ng-model="y" /></h2></div>
 <button ng-click="clickit()">CLICK</button>
*/