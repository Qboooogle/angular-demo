angular.module("webapp",[]);

angular.module("webapp").controller("EventTestCtrl", ["$scope",function($scope) {
	
	$scope.eventList = [];
		
	$scope.fireEvent = function(eventName) {
		$scope.eventList.push({name : eventName + " " + new Date().toLocaleString()});
		if($scope.eventList.length > 5) {
			$scope.eventList = $scope.eventList.slice(-5);
		}
	};
}]);
