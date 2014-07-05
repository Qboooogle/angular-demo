angular.module("webapp",[]).controller("DateCtrl", ["$scope",function($scope) {
	
	function getTime() {
		
		var d = new Date();
		
		$scope.date = d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
		
	}
	
	getTime();
	
}]).controller("TimeCtrl" , ["$scope","$timeout",function($scope,$timeout) {
	
	function getTime() {
		
		var d = new Date();
		
		$scope.date = d.getHours() + "时" + d.getMinutes() + "分" + d.getSeconds() + "秒";
		
		$timeout(getTime , 1 * 1000);
		
	}
	
	getTime();
	
}]);

angular.module("webapp").controller("HelloCtrl" , ["$scope" , function($scope) {
	$scope.greeting = {
		text : "hello,world"
	};
}]);
