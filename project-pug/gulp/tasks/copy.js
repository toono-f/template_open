const gulp = require('gulp');
const $ = require('../plugins');
const conf = require('../conf').copy;

gulp.task('copyToDest', () => {
  return gulp.src(conf.dest.src, conf.dest.opts).pipe(gulp.dest(conf.dest.dest));
});

gulp.task('copyToBuild', () => {
  return gulp.src(conf.build.src, conf.build.opts).pipe(gulp.dest(conf.build.dest));
});

gulp.task('copyImgToBuild', () => {
  return gulp
    .src(conf.img.src, conf.img.opts)
    .pipe(
      $.rename((path) => {
        path.dirname = path.dirname.replace('images', '.');
      }),
    )
    .pipe(gulp.dest(conf.img.dest));
});

gulp.task('copyJsToBuild', () => {
  return (
    gulp
      .src(conf.js.src)
      .pipe($.uglify())
      .pipe(gulp.dest(conf.js.dest))
  );
});

gulp.task('copyPhpToBuild', () => {
  return gulp.src(conf.php.src, conf.php.opts).pipe(gulp.dest(conf.php.dest));
});
