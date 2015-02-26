var gulp     = require('gulp');
var gutil    = require('gulp-util');
var nodemon  = require('gulp-nodemon');
var notify   = require('gulp-notify');
var liveroad = require('gulp-livereload');

gulp.task('js', function() {
  gulp.src('builds/development/js/**/*')
});

gulp.task('html', function() {
  gulp.src('builds/development/*.html')
  .pipe(liveroad(server))
  .pipe(notify({message: 'Views refreshed'}));
});

gulp.task('css', function() {
  gulp.src('builds/development/css/*.css')
});

gulp.task('watch', function() {
	liveroad.listen({start:true});
	gulp.watch('builds/development/js/**/*', ['js']);
	gulp.watch('builds/development/css/*.css', ['css']);
	gulp.watch(['builds/development/*.html','builds/development/views/*.html'], ['html']);
});

gulp.task('develop', function () {
  nodemon({
		  script: 'server.js'
		, ext: 'js html'
		, env: { 'NODE_ENV': 'development' }
		, nodeArgs: ['--debug'] 
	})
    .on('change', ['js','html','css'])
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'develop']);