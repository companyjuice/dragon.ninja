var gulp = require('gulp');
var shell = require('gulp-shell');
var handleErrors = require('../util/handleErrors');

gulp.task('eslint', shell.task([
  '"../node_modules/.bin/eslint" ./material-ui/src'
])).on('error', handleErrors);
