'use strict';

    
module.exports =function(beautifierService){
    return {
        scope:{
            inputJson: '=',
            outputJson: '='
        },
        templateUrl: '/app/modules/partials/input-json.html',
        link: function(scope) {
            scope.isValidInput = function(){
              return beautifierService.isValidInput(scope.inputJson);
            };

            scope.updateOutput = function(){
              scope.outputJson = beautifierService.getParsedOutput(scope.inputJson);
            };
        }
    }; 
};