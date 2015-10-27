
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var pleeease = require('gulp-pleeease');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var php = require('gulp-connect-php');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;


// Directory Paths
var src 		= 'src/';
var dest 		= 'public_html/';
var bowercomp 	= 'bower_components/';
var paths 		= {
					'jquery': bowercomp + 'jquery/',
					'bootstrap': bowercomp + 'bootstrap-sass/assets/',
					'fontawesome': bowercomp + 'font-awesome/',
					'adminlte': bowercomp + 'AdminLTE/'
				};

// -------------------------
// build
gulp.task('build',[
	'bowerassets',
	'assets',
	'sass',
	'js'
]);

// -------------------------
// Bower Assets

gulp.task('bowerassets', function() {
	gulp.src(paths.bootstrap + 'fonts/bootstrap/**')
		.pipe(gulp.dest(dest + 'fonts/bootstrap'));
	gulp.src(paths.fontawesome + 'fonts/**')
		.pipe(gulp.dest(dest + 'fonts'));
	gulp.src(paths.adminlte + 'dist/css/**')
		.pipe(gulp.dest(dest + 'css'));
	gulp.src(paths.adminlte + 'dist/css/skins/**')
		.pipe(gulp.dest(dest + 'css/skins'));
	gulp.src(paths.adminlte + 'dist/img/**.{png,jpg,gif,svg}')
        .pipe(imagemin({optimizationLevel: 7}))
		.pipe(gulp.dest(dest + 'img/adminlte'));
});

// -------------------------
// Assets

gulp.task('assets', function() {
	gulp.src(src + '**.html')
		.pipe(gulp.dest(dest));
	gulp.src(src + 'img/**.{png,jpg,gif,svg}')
	    .pipe(imagemin({optimizationLevel: 7}))
		.pipe(gulp.dest(dest + 'img'));
});

// -------------------------
// Sass
gulp.task('sass', function () {
	sass(src + 'sass',{
			style: 'expanded',
			sourcemap: true
		}
	)
	.pipe(pleeease({
		autoprefixer: {"browsers": ["last 4 versions", "Android 2.3"]},
		minifier: false
	}))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(dest + 'css'))
	.pipe(reload({stream:true}));
});

// -------------------------
// Js-concat-uglify

gulp.task('js', function() {
	gulp.src([
			paths.jquery + 'dist/jquery.js',
			paths.bootstrap + 'javascripts/bootstrap.js',
			paths.adminlte + 'dist/js/app.js'
		])
	.pipe(concat('app.js'))
	.pipe(uglify({preserveComments: 'some'})) // Keep some comments
	.pipe(gulp.dest(dest + 'js'))
	.pipe(reload({stream:true}));
});

// -------------------------
// Static server

gulp.task('php', function() {
	php.server({ base: './public_html/', port: 9998, keepalive: true});
});

gulp.task('browser-sync',['php'], function() {
    browserSync({
        //server: {
            baseDir: './public_html/',
	proxy: "127.0.0.1:9998",
	port: 9999,
	open: true,
	notify: false,
        //}
    });
});

// -------------------------
// Reload all browsers

gulp.task('bs-reload', function () {
	browserSync.reload();
});

// -------------------------
// Task for `gulp` command

gulp.task('default',['browser-sync'], function() {
	gulp.watch(src + '/*.html',['assets','bs-reload']);
	gulp.watch(src + 'scss/**/*.sass',['sass','bs-reload']);
	gulp.watch(src + "*.html", ['bs-reload']);
	gulp.watch(src + "*.php", ['bs-reload']);
	// gulp.watch(srcDir + 'root/*.*',['root']);
	// gulp.watch(srcDir + 'lib/**/*.*',['lib']);
	// gulp.watch(srcDir + 'sass/**/*.scss',['sass']);
	// gulp.watch(srcDir + 'js/**/*.js',['js']);
	// gulp.watch(srcDir + 'img/**/*.{png,jpg,gif,svg}',['imagemin']);
	// gulp.watch(srcDir + "*.html", ['bs-reload']);
	// gulp.watch(srcDir + "*.php", ['bs-reload']);
});
