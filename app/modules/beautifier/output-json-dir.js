'use strict';

module.exports = function(beautifierService){
    return {
        scope:{
          formattedJson: '='  
        },
        templateUrl: '/app/modules/partials/output-json.html',
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
};
