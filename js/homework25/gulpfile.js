const {src, dest, series, parallel, watch} = require ('gulp');
const del = require('del');
const browserSync = require('browser-sunc').create();

const babel = require('gulp-babel');

const origin = 'src';
const destination = 'build';

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}

exports.build = build;
exports.default = series(clean, build);



