const {src, dest, watch} = require("gulp");
const browserSync = require("browser-sync").create();
const cssmin = require("gulp-cssmin");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');

// Static server
 function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "src"
    }
  });
  watch("src/*.html").on("change", browserSync.reload);
  watch("src/sass/**/*.sass", serveSass);
  watch("src/js/*.js").on("change", browserSync.reload);
};

 function serveSass() {
  return src("src/sass/*.sass")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
    }))
      .pipe(dest("src/css"))
      .pipe(browserSync.stream());
};

function min() {
  return src("./src/css/*.css")
    .pipe(cssmin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("./dist/css/"));
  
};

exports.serve = bs;