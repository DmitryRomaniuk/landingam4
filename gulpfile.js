var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var path = require('path');

livereload({ start: true });

gulp.task('less', function () {
    return gulp.src('./src/styles/*.less')
        .pipe(less({
            paths: [ path.join(__dirname) ]
        }))
        .pipe(gulp.dest('./public/css'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen({port: 8080});
    gulp.watch('./src/styles/*.less', ['less']);
});

gulp.task('default', ['watch', 'less']);