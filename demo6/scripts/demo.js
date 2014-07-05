angular.module("webapp",[]);

angular.module("webapp").controller("DirectiveTestCtrl", ["$scope",function($scope) {
	
	$scope.peopleList = [
		{name : "lisi" , age : 26},
		{name : "zhangsan" , age : 20},
		{name : "wangwu" , age : 28}
	];
	
	$scope.readvar = 'readvar';
	$scope.readwritevar = 'readwritevar';
	$scope.exp = function(a , b) {
		alert('executed with a = ' + a + " , b = " + b);
	};
	
	$scope.logNewScope = function() {
		console.log($scope.tablesortvar);
		console.log($scope.tablesort1var);
	};
	
	$scope.logComplexScope = function() {
		console.log($scope.readvar);
		console.log($scope.readwritevar);
	};
	
}]);
