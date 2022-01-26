const gulp = require('gulp');
const requireDir = require('require-dir');
// const $ = require('./gulp/plugins');

requireDir('./gulp/tasks');

gulp.task(
  'default',
  gulp.series(
    'cleanDest',
    // gulp.parallel('pug', 'sass', 'scripts', 'vendorScripts', 'copyToDest', 'imageminWebpDest'),
    gulp.parallel('pug', 'sass', 'scripts', 'vendorScripts', 'copyToDest'),
    gulp.parallel('serve', 'watch'),
  ),
);

gulp.task(
  'build',
  gulp.series(
    'cleanDest',
    gulp.parallel('pug', 'sass', 'copyToDest'),
    'cleanBuild',
    gulp.parallel('replaceHtml', 'scripts'),
    gulp.parallel('cleanCss', 'copyToBuild', 'copyImgToBuild', 'imagemin', 'imageminWebpBuild', 'copyJsToBuild', 'copyPhpToBuild'),
    // gulp.parallel('cleanCss', 'copyToBuild', 'copyImgToBuild', 'imagemin', 'copyJsToBuild', 'copyPhpToBuild'),
  ),
);

gulp.task('buildHtml', gulp.series('pug', 'replaceHtml'));
gulp.task('buildCss', gulp.series('sass', 'cleanCss'));
gulp.task('buildScript', gulp.series('scripts', 'copyJsToBuild'));
gulp.task('buildFile', gulp.series('copyToBuild', 'imagemin', 'imageminWebpBuild'));

// gulp.task(
//   'default-ejs',
//   gulp.series(
//     'cleanDest',
//     gulp.parallel('ejs', 'sass', 'scripts', 'vendorScripts', 'copyToDest', 'imageminWebpDest'),
//     gulp.parallel('serve-ejs', 'watch'),
//   ),
// );

// gulp.task(
//   'buildEjs',
//   gulp.series(
//     'cleanDest',
//     gulp.parallel('ejs', 'sass', 'copyToDest'),
//     'cleanBuild',
//     gulp.parallel('replaceHtml', 'scripts'),
//     gulp.parallel('cleanCss', 'copyToBuild', 'copyImgToBuild', 'imagemin', 'imageminWebpBuild', 'copyJsToBuild', 'copyPhpToBuild'),
//   ),
// );
