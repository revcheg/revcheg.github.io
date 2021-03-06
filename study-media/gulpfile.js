var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var svgmin = require('gulp-svgmin');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

gulp.task('default', ['watch']);

gulp.task('minifyHTML', function () {
  gulp.src('dist/index.html')
    .pipe(gulp.dest('dist'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('minifySVG', function () {
  gulp.src('app/img/svg/**/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('dist/img/svg'));
});

gulp.task('markup', function () {
  gulp.src('dist/**/*.html')
    .pipe(livereload());
});

gulp.task('scripts', function () {
  gulp.src('app/js/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload());
});

gulp.task('styles', function () {
  gulp.src('app/sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(csso())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('app/sass/**/*.scss', ['styles']);
  gulp.watch('dist/**/*.html', ['markup']);
  gulp.watch('app/js/**/*.js', ['scripts']);
});