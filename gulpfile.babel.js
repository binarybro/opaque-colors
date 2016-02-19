'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import path from 'path';

global.isProd = false;

let src = path.join(__dirname, './scss/**/*.scss'),
     dst = path.join(__dirname, './dist/');

gulp.task('default', ['build']);

gulp.task('build', (_) => {
  return gulp.src(src)
    .pipe(sass({
        sourceComments: !global.isProd,
        outputStyle: global.isProd ? 'compressed' : 'nested',
      }))
      // .on('error', handleErrors)
      // .pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
      // .pipe(gulpif(
      //   createSourcemap,
      //   sourcemaps.write( global.isProd ? './' : null ))
      // )
      .pipe(gulp.dest(dst));
});

gulp.task('watch', (_) => {
  gulp.watch(src,  ['build']);
});
