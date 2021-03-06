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
    .src('source/sass/style.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(postcss([ autoprefixer() ]))
      .pipe(gulp.dest('build/css'))
      .pipe(csso())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('build/css'))
      .pipe(livereload())
}

function markup() {
  return gulp
    .src('build/**/*.html')
      .pipe(livereload())
}

function scripts() {
  return gulp
    .src('source/js/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('build/js'))
      .pipe(jsmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('build/js'))
      .pipe(livereload())
}

function images() {
  return gulp
    .src('source/img/*')
    .pipe(plumber())
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('build/img'))
}

function watch() {
  livereload.listen()
  gulp.watch('source/sass/**/*.scss', styles)
  gulp.watch('build/**/*.html', markup)
  gulp.watch('source/js/**/*.js', scripts)
  gulp.watch('source/img/*', images)
}

exports.default = watch;
exports.images = images;