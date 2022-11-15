const { src, dest, series, parallel, watch } = require('gulp');
const gulp = require('gulp');


function html (){
  return gulp.src('src/index.html')
    .pipe(gulp.dest('build/'));
};



function css (){
  return gulp.src('src/css/style.css')
    .pipe(gulp.dest('build/css'));
}




exports.build = series(html, css);
