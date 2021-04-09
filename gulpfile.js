const gulp = require('gulp');
const sass = require('gulp-sass');

let projects = ['test'];

projects.forEach(function (item) {
    gulp.task(item, function () {
        return gulp.src('./sass/all.scss').pipe(sass()).pipe(gulp.dest('./css/')).on('end', function () {
            console.log(item + ' done');
        });
    });
    gulp.watch('./sass/**/*.scss', gulp.series(item));
});

gulp.task('default', gulp.parallel(projects));