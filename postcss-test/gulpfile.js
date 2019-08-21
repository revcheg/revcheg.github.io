'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
// const jsmin = require('gulp-jsmin');
// const rename = require('gulp-rename');
const concat = require('gulp-concat');
// const livereload = require('gulp-livereload');

function styles() {
  var plugins = [
    autoprefixer({cascade: false}), 
    precss, 
    cssnano()
  ];
  
  return gulp
    .src('app/*.css')
    .pipe(plumber())
    .pipe(postcss(plugins))
    .pipe(concat('style.css', { newLine: '' }))
    .pipe(gulp.dest('dist/css'));
}

// function markup() {
//   return gulp
//     .src('dist/index.html')
//       .pipe(livereload())
// }

// function scripts() {
//   return gulp
//     .src('app/js/*.js')
//       .pipe(concat('main.js'))
//       .pipe(gulp.dest('dist/js'))
//       .pipe(jsmin())
//       .pipe(rename({suffix: '.min'}))
//       .pipe(gulp.dest('dist/js'))
//       .pipe(livereload())
// }

function watch() {
  // livereload.listen()
  gulp.watch('app/**/*.css', styles)
  // gulp.watch('dist/**/*.html', markup)
  // gulp.watch('app/js/**/*.js', scripts)
}

exports.default = watch;