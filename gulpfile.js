// still need to add minify

var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    webserver = require('gulp-webserver');

var src = './process',
    app = './compiled';

gulp.task('js', function() {
	return gulp.src( src + '/components/app.jsx' )
	  .pipe(browserify({
	  	transform: 'reactify',
	  	debug: true
	  }))
	  .on('error', function(err) {
	  	console.error('gulp task js is picking up error: ', err.message);
	  })
	  .pipe(gulp.dest(app + '/js'));
}); // Compiling everything from the process folder into the compiled folder (converting jsx)
// Notice how only the single components/app.js file is being compiled. Is this ok? I guess it grabs the other files because they are required?
// Need to find out how frequently this needs to be run... once on each default task call? How does it pick up changes?

gulp.task('html', function() {
	gulp.src( app + '/**/*.html')
});
// What does the /**/* represent here?

gulp.task('watch', function() {
  gulp.watch( src + '/js/**/*', ['js']);
  gulp.watch( app + '/css/**/*.css', ['css']);
  gulp.watch( app + '/js/**/*.js', ['js']);
  gulp.watch( app + '/**/*.html', ['html']);
});
// possible that the first argument in each of the watch functions needs to be in array ?
// look up documentation on watch again
gulp.task('webserver', function() {
  gulp.src( app + '/' )
  .pipe( webserver({
  	livereload: true,
  	open: true
  }));
}); // Live running server which will pick up changes just like nodemon. Running on port:

gulp.task('default', ['html', 'watch', 'webserver'])

