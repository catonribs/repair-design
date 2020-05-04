var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

function defaultTask(cb) {
  console.log("Hello, world")
  // place code for your default task here
  cb();
}

exports.default = defaultTask