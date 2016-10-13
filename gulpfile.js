var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function(){
    var options = {
        server: {baseDir: 'public/'},
        port: process.env.PORT,
        ui: { port: 8081 }
    };
    browserSync.init(options);
    gulp.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);