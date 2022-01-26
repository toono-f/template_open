const gulp = require('gulp');
const browserSync = require('browser-sync');
const DIR = require('../conf').DIR;

const reload = (done) => {
  browserSync.reload();
  done();
};

gulp.task('watch', () => {
  gulp.watch([`./${DIR.SRC}/css/**/*.{scss,sass}`], gulp.series('sass', reload));
  gulp.watch([`./${DIR.SRC}/**/*.pug`], gulp.series(reload));
  // gulp.watch([`./${DIR.SRC}/**/*.ejs`], gulp.series('ejs', reload)); // ejsを扱う場合はコメント解除
  gulp.watch([`./${DIR.SRC}/js/**/*.{js,vue,vs,fs,glsl,css,scss}`], gulp.series('scripts', 'vendorScripts', reload));
  gulp.watch([`./${DIR.SRC}/images/**/*.*`, `./${DIR.SRC}/font/**/*.*`, `./${DIR.SRC}/json/**/*.*`], gulp.series('copyToDest', reload));
  gulp.watch([`./${DIR.SRC}/images/**/*.{jpg,jpeg,png}`], gulp.series('imageminWebpDest', reload));
});
