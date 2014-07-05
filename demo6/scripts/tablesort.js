angular.module('webapp')
    .directive('tablesort', [function () {
    	return {
    		restrict: 'A',
    		scope : true ,
            link: function(scope, el, attrs) {
           		scope.tablesortvar = 'tablesortvar';
           		$(el).click(function() {
           			console.log(scope.tablesortvar);
           			console.log(scope.tablesort1var);
           			console.log(scope.peopleList);
           			console.log("call from tablesort");
           		});
            }
    	};
    }]);