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

function stylesProgram() {
  return gulp
    .src('source/sass/program.scss')
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
    .src('build/index.html')
      .pipe(livereload())
}

function scripts() {
  return gulp
    .src('source/js/*')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('build/js'))
      .pipe(jsmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('build/js'))
      .pipe(livereload())
}

function scriptsProgram() {
  return gulp
    .src('source/js/program/*')
      .pipe(concat('program.js'))
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

function imagesProgram() {
  return gulp
    .src('source/img/washington-ny-hawaii/*')
    .pipe(plumber())
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest('build/img/washington-ny-hawaii'))
}

function watch() {
  livereload.listen()
  gulp.watch('source/sass/blocks/**/*.scss', styles)
  gulp.watch('source/sass/program/**/*.scss', stylesProgram)
  gulp.watch('build/**/*.html', markup)
  gulp.watch('source/js/*.js', scripts)
  gulp.watch('source/js/program/*.js', scriptsProgram)
  gulp.watch('source/img/*', images)
}

exports.default = watch;
exports.styles = styles;
exports.stylesProgram = stylesProgram;
exports.scripts = scripts;
exports.images = images;
exports.imagesProgram = imagesProgram;