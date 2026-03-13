const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');

// Tugas untuk memproses HTML & CSS internal
gulp.task('build', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ 
        collapseWhitespace: true,
        minifyCSS: true // Ini akan mengecilkan <style> di dalam HTML Anda
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('build'));