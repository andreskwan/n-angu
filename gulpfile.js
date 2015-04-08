//3/7/15
//- running mongodb from gulp

//old
var browserSync = require("browser-sync");
var dest        = require('gulp-dest');
var gulp        = require('gulp');
var gutil       = require('gulp-util');
var nodemon     = require('gulp-nodemon');
var notify      = require('gulp-notify');
var rename      = require('gulp-rename');
var shell       = require('gulp-shell');

//3/7/15
gulp.task('mongodb', function(){
  return gulp.src('')
  .pipe(shell(['mongod --dbpath=data --config /usr/local/etc/mongod.conf']));
})
.task('js', function() {
  return gulp.src('builds/development/js/**/*',{ base: 'builds/development'})
  .pipe(gulp.dest('./public'))
  .pipe(notify({message: 'JS refreshed'}));
})
.task('html', function() {
  return gulp.src('builds/development/templates/**/*', { base: 'builds/development'})
  // .pipe(rename(function (path) {
  //       path.dirname += "/public";
  //       // console.log("path: ", path);
  //   }))
  .pipe(gulp.dest('./public'))
  // .pipe(browserSync.reload())
  .pipe(notify({message: 'Views refreshed'}));
})
.task('home', function() {
  return gulp.src('builds/development/index.html', { base: 'builds/development'})
  // .pipe(rename(function (path) {
  //       path.dirname += "/public";
  //       // console.log("path: ", path);
  //   }))
  .pipe(gulp.dest('./public'))
  // .pipe(browserSync.reload())
  .pipe(notify({message: 'Home refreshed'}));
})
.task('css', function() {
  // return gulp.src('builds/development/css/*.css')
  return gulp.src('builds/development/css/**/*',{ base: 'builds/development'})
  .pipe(gulp.dest('./public'))
  .pipe(notify({message: 'CSS refreshed'}));
})
.task('images', function() {
  // return gulp.src('builds/development/css/*.css')
  return gulp.src('builds/development/images/**/*',{ base: 'builds/development'})
  .pipe(gulp.dest('./public'))
  .pipe(notify({message: 'Images refreshed'}));
})
.task('watch', function() {
	gulp.watch('builds/development/js/**/*', ['js']);
	gulp.watch('builds/development/css/*.css', ['css']);
  gulp.watch(['builds/development/images/**/*'], ['images']);
	gulp.watch(['builds/development/templates/**/*'], ['html']);
})
.task('nodemon', function(cb) {
  var nodemon = require('gulp-nodemon');

  // We use this `called` variable to make sure the callback is only executed once
  var called = false;
  return nodemon({
                    script  : 'server.js',
                    watch   : ['server.js','builds/development/views/*.html'],
                    env     : {'NODE_ENV':'development'},
                    nodeArgs: ['--debug']
  })
  .on('start', function onStart() {
    if (!called) {
      cb();
    }
    called = true;
  })
  // .on('change', ['defaul'])
  .on('change', function onChange() {
    console.log("--------On Change");
    // Also reload the browsers after a slight delay
    setTimeout(function reload() {
      browserSync.reload({
        stream: false
      });
    }, 500);
  })
  .on('restart', function onRestart() {
    console.log("--------On Restart");
    // Also reload the browsers after a slight delay
    setTimeout(function reload() {
      browserSync.reload({
        stream: false
      });
    }, 500);
  });
})

// Make sure `nodemon` is started before running `browser-sync`.
.task('browser-sync', ['js', 'nodemon'], function() {
  var port = process.env.PORT || 3000;//port when app is running
  browserSync.init({
    // All of the following files will be watched
    files: ['builds/**/*.*'],
    // Tells BrowserSync on where the express app is running
    proxy: 'http://localhost:' + port,
    // This port should be different from the express app port
    port: 4000,
    // Which browser should we launch?
    // browser: ['google chrome']
    browser: "google chrome"
  });
})
// use default task to launch BrowserSync and watch JS files
.task('default', ['browser-sync'], function () {
    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("js/**/*", ['js', browserSync.reload]);
    gulp.watch("builds/development/views/*.html", ['html', browserSync.reload]);
})
.task('default', ['watch','home','html', 'js', 'css','images', 'nodemon','browser-sync']);