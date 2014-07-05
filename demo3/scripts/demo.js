angular.module("webapp",[]);

angular.module("webapp").controller("FilterTestCtrl", ["$scope",function($scope) {
	$scope.a = 10;
	$scope.b = 20;
	$scope.fibonacci = function(n) {
		var sum = 0;
		for(var i = 1 ; i <= n ; i++) {
			sum += i;
		}
		return sum;
	};
	$scope.productList = ["keyboard","mouse","laptop"];
	$scope.jdbcConf = {
		url : 'jdbc:mysql://192.168.0.102:3306/test'
	};
}]).filter("concat" , [function() {
	return function(arr , concat_char) {
		if(!angular.isArray(arr)) {
			return '';
		}
		concat_char = concat_char || ' ';
		return arr.join(concat_char);
	};
}]).filter("strlen" , [function() {
	return function(str) {
		if(!angular.isString(str)) {
			return '';
		}
		return str.length;
	};
}]);