angular.module("webapp",[]);

angular.module("webapp").controller("HttpCtrl", ["$scope","$http",function($scope,$http) {
	
	$http.get("/getbooks").success(function(ret) {
		$scope.bookList = ret;
	}).error(function(msg) {
		alert(msg);
	});
	
}]);
