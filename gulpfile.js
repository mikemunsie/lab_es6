var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var moduleTranspile = require('gulp-es6-module-transpiler');
var es6transpiler = require("gulp-es6-transpiler");

gulp.task("default", function() {
  return gulp.src('./public/javascripts/**/*.js')
  .pipe(moduleTranspile({
    basePath: "./public/javascripts",
    formatter: 'bundle'
  }))
  .pipe(es6transpiler({
    disallowUnknownReferences: false
  }))
  .pipe(gulp.dest('./public/javascripts-min'));
});