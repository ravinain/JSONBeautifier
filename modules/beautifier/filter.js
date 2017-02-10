
(function() {
    var app = angular.module('beautifierApp');

    app.filter('numKeys', function() {
        return function(json) {
            var keys = Object.keys(json)
            return json.$$hashKey ? keys.length-1 : keys.length;
        }
    });
})();