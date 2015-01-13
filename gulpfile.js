(function () {
  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')();

  gulp.task('build', ['clean'],
    function buildTask() {

      return gulp.src('lib/*.js')
        .pipe($.stripDebug())
        .pipe($.ngAnnotate({
          remove: false,
          add: true,
          single_quotes: true,
          stats: true
        }))
        .pipe($.order([
          '**/*/index.js',
          '**/*/swapiEndpoints.js',
          '**/*/swapiService.js'
        ]))
        .pipe($.concat('xyz-angular-swapi.js'))
        .pipe(gulp.dest('dist'))
        .pipe($.rename('xyz-angular-swapi.min.js'))
        .pipe($.uglify({
          mangle: true
        }))
        .pipe(gulp.dest('dist'));
    }
  );

  gulp.task('clean',
    function cleantask() {
      return gulp.src(['dist'], {
          read: false
        })
        .pipe($.clean());
    }
  );

  gulp.task('default', ['build']);

})();
