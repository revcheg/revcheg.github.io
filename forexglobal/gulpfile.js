var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var svgmin = require('gulp-svgmin');
var livereload = require('gulp-livereload');

gulp.task('default', ['watch']);

gulp.task('minifyHTML', function () {
  gulp.src('index.html')
    .pipe(gulp.dest('dist'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(''));
});

gulp.task('minifySVG', function () {
  gulp.src('app/img/svg/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('dist/img/svg'));
});

gulp.task('styles', function () {
  gulp.src('sass/style.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css'))
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('sass/**/*.scss', ['styles']);
});