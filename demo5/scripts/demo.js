angular.module("webapp",[]);

angular.module("webapp").controller("DirectiveTestCtrl", ["$scope",function($scope) {
	
	$scope.peopleList = [
		{name : "lisi" , age : 26},
		{name : "zhangsan" , age : 20},
		{name : "wangwu" , age : 28}
	];
	
	$scope.popJsFrameworks = [
		{"prjName" : "angular.js" , stars : 25664},
		{"prjName" : "backbone" , stars : 18481},
		{"prjName" : "ember.js" , stars : 10646 },
		{"prjName" : "knockout" , stars :  5154 }
	];
	
	function sortFn(prop,multiply) {
		return function(obj1,obj2) {
			if(obj1[prop] > obj2[prop]) {
				return 1 * multiply;  
			} else if(obj1[prop] < obj2[prop]) {
				return -1 * multiply;
			} else {
				return 0;
			}
		};
	}
	$scope.orderby = function(order , list) {
		var prop = order.split(' ')[0],
			orderStr = order.split(' ')[1],
			multiply = /^asc/i.test(orderStr) ? 1 : -1;
		list.sort(sortFn(prop,multiply));
	};
	
	
}]);
