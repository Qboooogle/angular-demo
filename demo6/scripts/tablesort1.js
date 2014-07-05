angular.module('webapp')
    .directive('tablesort1', [function () {
    	return {
    		restrict: 'A',
    		scope : true ,
            link: function(scope, el, attrs) {
           		scope.tablesort1var = 'tablesort1var';
           		$(el).click(function() {
           			console.log(scope.tablesortvar);
           			console.log(scope.tablesort1var);
           			console.log(scope.peopleList);
           			console.log("call from tablesort1");
           		});
            }
    	};
    }]);