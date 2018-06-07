var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');

gulp.task('default', ['watch', 'main']);

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('sass/**/*.scss', ['main']);
  gulp.watch('js/*.js', ['main']);
});

gulp.task('main', function () {
  gulp.src('sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
    .pipe(gulp.dest('../dist/css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('../dist/css'))
    .pipe(livereload());
    
  gulp.src('js/main.js')
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('../dist/js'));
});