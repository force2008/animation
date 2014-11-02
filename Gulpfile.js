var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webpack = require('gulp-webpack');

// gulp.task('jshint', function () {
// 	return gulp.src('js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

gulp.task('minify', function () {
	return gulp.src('js/animation.js')
		.pipe(webpack({
		      output: {
		        filename: 'animation.min1.js',
		        libraryTarget: "umd"
		      }
		    }
		    ))
        .pipe(gulp.dest('dist'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', [ 'minify']);

