var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var path = require('path');
var staticNode = require('node-static');
var file = new staticNode.Server('./public');

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
    gulp.watch('./public/index.html', function () {
        livereload.reload('./public/index.html');
    });
    gulp.watch('./src/styles/*.less', ['less']);
});

gulp.task('default', ['watch', 'less']);

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(8080);

console.log('local server started on http://localhost:8080');