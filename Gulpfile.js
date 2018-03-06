var gulp = require('gulp');
var stylemod = require('gulp-style-modules');
var path = require("path")
 
// Wrap css files 
gulp.task("modularize-styles", function() {
    gulp.src("./theme/assets/**/*.css")
        .pipe(stylemod({
            // All files will be named 'styles.html' 
            filename: function(file){ return path.basename(file.path, path.extname(file.path)); },
            // Use '-css' suffix instead of '-styles' for module ids 
            moduleId: function(file) {
                return path.basename(file.path, path.extname(file.path)) + "-css";
            }
        }))
        .pipe(gulp.dest("./src"));
})
 
// // Use with preprocessor (e.g. stylus) 
// gulp.task("modularize-styles", function() {
//     gulp.src("./src/**/*.styl")
//         .pipe(stylus({use: [nib()]}))
//         .pipe(stylemod())
//         .pipe(gulp.dest("./src"));
// }


gulp.task('default', function() {
    gulp.run('modularize-styles');

    // gulp.watch('app/src/**', function(event) {
    //     gulp.run('scripts');
    // })

    // gulp.watch('app/css/**', function(event) {
    //     gulp.run('styles');
    // })

    // gulp.watch('app/**/*.html', function(event) {
    //     gulp.run('html');
    // })
})