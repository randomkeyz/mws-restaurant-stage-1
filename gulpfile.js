var gulp = require('gulp');
var del = require('del');
var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var webp = require('gulp-webp');

gulp.task('clean:img', function(){
  return del.sync('img');
});
/*
gulp.task('resize-sm', function () {
  gulp.src('src/img/** /*.jpg')
    .pipe(imageResize({
      width : 225,
      crop : false,
      upscale : true
    }))
    .pipe(rename(function(path){
      path.basename += '_sm';
    }))
    .pipe(gulp.dest('img'));
    });
*/
/*
gulp.task('webp', () =>
  gulp.src('img/** /*.jpg')
    .pipe(webp({lossless: true}))
    .pipe(gulp.dest('img'))
);
*/

/*
gulp.task('images', function () {
  gulp.src('src/img/** /*.jpg')
    .pipe(imageResize({
      width : 270,
      crop : false,
      upscale : true
    }))
    .pipe(rename(function(path){
      path.basename;
    }))
    .pipe(gulp.dest('img'));
});
*/
gulp.task('images-md', function () {
  gulp.src('src/img/**/*.jpg')
    .pipe(imageResize({
      width : 400,
      crop : false,
      upscale : true
      }))
    .pipe(rename(function(path){
      path.basename += '_md';
    }))
    .pipe(gulp.dest('img'));
});

gulp.task('images-lg', function(){
  gulp.src('src/img/**/*.jpg')
    .pipe(rename(function(path){
      path.basename += '_lg';
    }))
    .pipe(gulp.dest('img'));
})


gulp.task('default', function(){
  runSequence('clean:img', ['images-md', 'images-lg']);
});

