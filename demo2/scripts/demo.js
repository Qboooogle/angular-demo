angular.module("webapp",[]);

angular.module("webapp").factory("bookNameMap" , [function(){
	return {
		"0001" : {name : "AngularJS In Action"},
		"0002" : {name : "Bootstrap In Action"},
		"0003" : {name : "Python In Action"}
	};
}]);

angular.module("webapp").factory("bookPriceMap" , [function(){
	return {
		"0001" : {price : 37.50},
		"0002" : {price : 33.80},
		"0003" : {price : 78.60}
	};
}]);

angular.module("webapp").factory("getBookList" , ["bookNameMap","bookPriceMap",function(bookNameMap,bookPriceMap) {
	
	return function() {
		
		var retList = [];
		
		for(var bookNumber in bookNameMap) {
			retList.push({
				name : bookNameMap[bookNumber]['name'],
				price : bookPriceMap[bookNumber]['price']
			});
		}		
		
		return retList;
		
	};
	
}]);

angular.module("webapp").controller("ServiceTestCtrl", ["$scope",'getBookList','$timeout',function($scope,getBookList,$timeout) {
	var bookList = getBookList();
	$scope.bookList = bookList;
	
	$timeout(function() {
		$scope.delayStr = '这个字符串三秒后显示';
	} , 3 * 1000);
	
}]);