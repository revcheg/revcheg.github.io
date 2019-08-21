'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const csso = require('gulp-csso');
const jsmin = require('gulp-jsmin');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');
const imagemin = require('gulp-imagemin');

function styles() {
  return gulp
    .src('app/sass/style.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(postcss([ autoprefixer() ]))
      .pipe(gulp.dest('dist/css'))
      .pipe(csso())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/css'))
      .pipe(livereload())
}

function markup() {
  return gulp
    .src('dist/*.html')
      .pipe(livereload())
}

function scripts() {
  return gulp
    .src('app/js/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('dist/js'))
      .pipe(jsmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/js'))
      .pipe(livereload())
}

function images() {
  return gulp
    .src('dist/img/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('dist/img'))
}

function watch() {
  livereload.listen()
  gulp.watch('app/sass/**/*.scss', styles)
  gulp.watch('dist/**/*.html', markup)
  gulp.watch('app/js/**/*.js', scripts)
}

exports.default = watch;
exports.images = images;