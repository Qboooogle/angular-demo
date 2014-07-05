angular.module("webapp",[
	"ngRoute"
]);
angular.module("webapp").config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/ctrl1', {
        templateUrl: 'views/ctrl1.html',
        controller: 'Ctrl1'
    })
    .when('/ctrl2', {
        templateUrl: 'views/ctrl2.html',
        controller: 'Ctrl2'
    })
    .when('/ctrl3', {
        templateUrl: 'views/ctrl3.html',
        controller: 'Ctrl3'
    })
    .otherwise({
        redirectTo: '/ctrl1'
    });
}]);

angular.module('webapp').controller('Ctrl1' , ['$scope',function($scope) {
	$scope.Ctrl1Var = 'Ctrl1Var';
}]);
angular.module('webapp').controller('Ctrl2' , ['$scope',function($scope) {
	$scope.Ctrl2Var = 'Ctrl2Var';
}]);
angular.module('webapp').controller('Ctrl3' , ['$scope',function($scope) {
	$scope.Ctrl3Var = 'Ctrl3Var';
}]);

