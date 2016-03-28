var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var mocha = require('gulp-mocha');

gulp.task('default', function() {
  nodemon({
    script: 'app.js',
    ext: 'js',
    env: {
      PORT: 3000
    },
    ignore: ['/node_modules/**']
  })
    .on('restart', function() {
      console.log('Restarting...');
    });
});

gulp.task('tests', function() {
  gulp.src('tests/*.js', {read: false})
    .pipe(mocha({reported: 'list'}));
});

gulp.task('watch', function() {
  gulp.run('tests');

  gulp.watch(['./**/*.js', 'tests/**/*.js'], ['tests']);
});
