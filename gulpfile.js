const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");

// Static server
gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "src"
    }
  });
  gulp.watch("src/*.html").on("change", browserSync.reload);
});

gulp.task("css", function (done) {
  gulp
    .src("./src/css/*.css")
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./dist/css/"));
  done();
  gulp - cssmin;
});

function defaultTask(cb) {
  console.log("Hello, world");
  // place code for your default task here
  cb();
}

exports.default = defaultTask;
