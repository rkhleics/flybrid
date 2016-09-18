var gulp = require('gulp'),
	less = require('gulp-less'),
	gutil = require('gulp-util'),
	cleanCSS = require('gulp-clean-css'),
	rename = require('gulp-rename'),
	inlineSource = require('gulp-inline-source'),
	inlineCSS = require('gulp-inline-css'),
	deleteLines = require('gulp-delete-lines'),
	removeHTML = require('gulp-remove-html');

var config = require('./gulp.config')();

/* Global functions */
// Injects custom messages into stream
function log(msg, color) {
  var msgColor = color ? gutil.colors[color] : gutil.colors.blue;
  if (typeof(msg) === 'object') {
    for (var item in msg) {
      if(msg.hasOwnProperty(item)) {
        gutil.log(msgColor(msg[item]));
      }
    }
  } else {
    gutil.log(msgColor(msg));
  }
}
// Handles error without breaking stream
function handleError(err) {
  gutil.beep();
  log(err.toString(), 'red');
  this.emit('end');
}

gulp.task('dist-html-with-primer', function(){
	log("Creating the 'with primer' version of index.html and adding to 'dist' directory");
	return gulp.src('source/index.html')
	.pipe(deleteLines({ 'filters': [/<!--<\/?Deject/i] }))
	.pipe(rename("with-primer.html"))
	.pipe(gulp.dest(config.distDir));
});

gulp.task('dist-html-without-primer', function(){
	log("Creating the 'without primer' version of index.html and adding to 'dist' directory");
	return gulp.src('source/index.html')
	.pipe(removeHTML())
	.pipe(rename("without-primer.html"))
	.pipe(gulp.dest(config.distDir));
});

gulp.task('compile-flybrid-less', function(){
	log("Compiling '_flybrid.less' to 'dist' directory");
	return gulp.src('source/less/_flybrid.less')
	.pipe(less())
	.pipe(rename("flybrid.css"))
	.pipe(gulp.dest(config.distDir));
});

gulp.task('compile-less', function(){
	log("Compiling LESS and saving cleaned CSS to 'source' and 'dist' directories");
	return gulp.src('source/less/style.less')
	.pipe(less())
	.pipe(cleanCSS(config.cleanCSSConfig))
	.pipe(gulp.dest(config.sourceDir))
	.pipe(gulp.dest(config.distDir));
});

gulp.task('dist-html-inlined', ['dist-html-with-primer', 'dist-html-without-primer', 'compile-less'], function(){
	log("Inlining CSS and saving 'inlined' version on index.html to 'dist' directory");
	return gulp.src(['dist/*.html', '!dist/*_inlined.html'])
	.pipe(inlineSource({ compress: false, ignore: ['img', 'script'] }))
	.pipe(inlineCSS(config.inlineCSSConfig))
	.pipe(rename({suffix: '_inlined'}))
	.pipe(gulp.dest(config.distDir));
});

gulp.task('default', ['dist-html-inlined', 'compile-flybrid-less']);

gulp.task('watch', function(){
	gulp.watch(['source/**/*.less', 'source/*.html'], ['default']);
});
