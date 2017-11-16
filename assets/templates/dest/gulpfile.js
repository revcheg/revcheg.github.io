var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var plumber = require("gulp-plumber");

gulp.task('default', ['sass', 'watch']);

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('sass/**/*.scss', ['sass']); 
});

gulp.task("sass", function() {
  gulp.src("sass/style.scss") 
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
    .pipe(gulp.dest("css"))
    .pipe(livereload());
});