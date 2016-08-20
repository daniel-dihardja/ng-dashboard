/**
 * Created by danieldihardja on 24/07/16.
 */

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var jspm		= require('jspm');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

	browserSync.init({
		server: {
			baseDir: "./src",

			// serve our jspm dependencies with the src folder
			routes: {
				'/jspm.config.js': 	'./jspm.config.js',
				'/jspm_packages': 	'./jspm_packages',
				'/assets': 			'./src/app/assets'
			}
		}
	});

	gulp.watch("src/**/*.scss", ['sass']);
	gulp.watch("src/app/components/**/*.scss", ['sass']);
	gulp.watch("src/app/common/**/*.scss", ['sass']);
	gulp.watch("src/**/**/**/*.html").on('change', browserSync.reload);
	gulp.watch("src/app/**/**/*.js").on('change', browserSync.reload);

});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src("src/sass/main.scss")
		.pipe(sass())
		.pipe(gulp.dest("src/app/assets"))
		.pipe(browserSync.stream());
});

// bundle admin
gulp.task('bundle', function(done) {
	// TODO:
	// find out why this is not working like the cli
	//var builder = jspm.Builder();
	jspm.bundleSFX('./src/app/app', './dist/zf-admin.js')
		.then(function(out) {
			//builder.getDepCache(out.tree);
			done();
		});
});

gulp.task('default', ['serve']);