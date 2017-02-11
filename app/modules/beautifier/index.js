'use strict';

var app = require('angular').module('beautifierApp');

app.controller('beautifierCtrl', ['$scope', 'beautifierService', '$localStorage', require('./ctrl')]);
app.directive('outputBlock', ['beautifierService', require('./output-json-dir')]);
app.directive('inputBlock', ['beautifierService', require('./input-json-dir')]);
app.factory('beautifierService', require('./service'));
app.filter('numKeys', require('./filter'));
