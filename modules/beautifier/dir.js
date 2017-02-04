(function(){
    var myApp = angular.module('beautifierApp');
    myApp.directive('outputBlock', ['beautifierService', function(beautifierService){
        return {
            scope:{
              formattedJson: '='  
            },
            templateUrl: '/modules/beautifier/output-json.html',
            link: function(scope){
                scope.showChildren = true;
                scope.blockHighlightFlag = false;
                scope.isArrayType = function(obj){
                    return beautifierService.isArrayType(obj);
                };
                
                scope.isObjectType = function(obj){
                    return beautifierService.isObjectType(obj);
                };
            }
        };
    }]);
    
    myApp.directive('inputBlock', ['beautifierService', function(beautifierService){
        return {
            scope:{
                inputJson: '=',
                outputJson: '='
            },
            templateUrl: '/modules/beautifier/input-json.html',
            link: function(scope) {
                scope.isValidInput = function(){
                  return beautifierService.isValidInput(scope.inputJson);
                };

                scope.updateOutput = function(){
                  scope.outputJson = beautifierService.getParsedOutput(scope.inputJson);
                };
            }
        }; 
    }]);
    
})();