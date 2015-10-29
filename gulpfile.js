var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename');
var coffee = require('gulp-coffee');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('scripts', function(){
  return gulp.src('./**/*.coffee')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(coffee({bare: true}))
    // .pipe(concat('main.js'))
    .pipe(gulp.dest('./'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./'))
});

gulp.task('default', function(){
  gulp.watch("./**/*.coffee", ['scripts']);
});
