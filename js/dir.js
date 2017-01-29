(function(){
    var myApp = angular.module('jpApp');
    myApp.directive('outputJson', function(){
        return {
            scope:{
              formattedJson: '='  
            },
            templateUrl: 'output-json.html',
            link: function(scope){
                scope.showChildren = true;
                scope.isArrayType = function(obj) {
                    return obj instanceof Array;
                };
                
                scope.isObjectType = function(obj) {
                    return ((obj instanceof Object) && !scope.isArrayType(obj));
                }
            }
        };
    });
})();