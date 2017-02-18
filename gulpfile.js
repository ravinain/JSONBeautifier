var gulp = require('gulp'),
    browserify = require('browserify'),
    karma = require('karma').server;

gulp.task('tests', function(done) {
  return karma.start({
      configFile: __dirname + '/karma.conf.js',
      singleRun: false
    }, done);
});