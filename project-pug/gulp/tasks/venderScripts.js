const gulp = require('gulp');
const conf = require('../conf').vendorScripts;

gulp.task('vendorScripts', () => {
  return gulp.src(conf.src).pipe(gulp.dest(conf.dest));
});
