var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var plumber = require('gulp-plumber');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('default', ['sass', 'watch']);

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
  gulp.src('sass/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
    .pipe(gulp.dest('css'))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});
