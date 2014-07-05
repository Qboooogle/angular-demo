angular.module('webapp')
    .directive('tablesort2', [function () {
    	return {
    		restrict: 'A',
    		scope : {
				"readvar":"@",
				"readwritevar":"=",
				"exp" : "&"
    		} ,
            link: function(scope, el, attrs) {
				$(el).click(function() {
					scope.$evalAsync(function() {
						
						console.log(scope.readvar);
						console.log(scope.readwritevar);
						
						scope.readvar = '111111111111';
						scope.readwritevar = '222222222222';
						
						scope.exp({
							a : 333,
							b : 444
						});
						
					});
				});
            }
    	};
    }]);