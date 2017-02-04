
(function() {
    var app = angular.module('beautifierApp');

    app.filter('numKeys', function() {
        return function(json) {
            var keys = Object.keys(json)
            return keys.length;
        }
    });
})();