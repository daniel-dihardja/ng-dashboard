/**
 * Created by danieldihardja on 24/07/16.
 */

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

	browserSync.init({
		server: {
			baseDir: "./src",
			// serve our jspm dependencies with the src folder
			routes: {
				'/jspm.config.js': './jspm.config.js',
				'/jspm_packages': './jspm_packages'
			}
		}
	});

	gulp.watch("src/**/*.scss", ['sass']);
	gulp.watch("src/components/**/*.scss", ['sass']);
	gulp.watch("src/common/**/*.scss", ['sass']);
	gulp.watch("src/*.html").on('change', browserSync.reload);
	gulp.watch("src/**/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src("src/sass/main.scss")
		.pipe(sass())
		.pipe(gulp.dest("src"))
		.pipe(browserSync.stream());
});

gulp.task('css', ['sass'], function() {
	gulp.src('./src/css/main.css')
		.pipe(gulp.dest('./dist'));
});


gulp.task('default', ['serve']);