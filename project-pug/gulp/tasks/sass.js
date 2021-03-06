const gulp = require('gulp');
const $ = require('../plugins');
const conf = require('../conf').sass;
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', () => {
  return gulp
    .src(conf.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(
      $.autoprefixer({
        cascade: false,
      }),
    )
    .pipe(
      $.rename((path) => {
        path.dirname = path.dirname.replace('css', '.');
      }),
    )
    .pipe(gulp.dest(conf.dest));
});
