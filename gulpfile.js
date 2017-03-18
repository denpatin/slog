'use strict';

var gulp = require('gulp');
var del = require('del');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var concatJs = require('gulp-concat');
var minifyJs = require('gulp-uglify');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');

var buildDir = 'assets/build/'
var assetsDir = 'assets/src/';
var cssDir = assetsDir + 'css/';
var jsDir = assetsDir + 'js/';

var cssSrc = ['mui', 'layout'];
var jsSrc = ['mui'];

gulp.task('js', function() {
  return gulp.src(jsSrc.map(function(js) {
    return jsDir.concat(js, '.js')
  }))
    .pipe(concatJs('application.js'))
    .pipe(gulp.dest(buildDir))
});

gulp.task('css', function() {
  return gulp.src(cssSrc.map(function(css) {
    return cssDir.concat(css, '.css')
  }))
    .pipe(concatCss('application.css'))
    .pipe(gulp.dest(buildDir))
});

gulp.task('minify', ['js', 'css'], function() {
  return gulp.src(buildDir + 'application*')
    .pipe(gulpif(['*.js'], minifyJs()))
    .pipe(gulpif(['*.css'], minifyCss()))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(buildDir));
});

gulp.task('clean', function () {
  return del([
    buildDir + 'application.*'
  ]);
});

gulp.task('default', ['clean', 'minify']);
