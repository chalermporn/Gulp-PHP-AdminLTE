
var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var sass = require('gulp-ruby-sass');
var pleeease = require('gulp-pleeease');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var php = require('gulp-connect-php');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

var shell = require('gulp-shell');

// Directory Paths
var src 		= 'src/';
var dest 		= 'public/';
var bowercomp 	= 'bower_components/';
var paths 		= {
					'jquery': bowercomp + 'jquery/',
					'bootstrap': bowercomp + 'bootstrap-sass/assets/',
					'fontawesome': bowercomp + 'font-awesome/',
					'adminlte': bowercomp + 'AdminLTE/',
					'view': '../resources/views/'
				};

gulp.task('laravel-install',shell.task([ 
	'composer create-project laravel/laravel --prefer-dist laravel',
	'mv laravel/gulpfile.js laravel/gulpfile.js.original',
	'mv laravel/package.json laravel/package.json.original',
	'mv laravel/public laravel/public_original',
	'ln -s ../bower.json laravel/bower.json',
	'ln -s ../bower_components laravel/bower_components',
	'ln -s ../gulpfile.js laravel/gulpfile.js',
	'ln -s ../node_modules laravel/node_modules',
	'ln -s ../package.json laravel/package.json',
	'ln -s ../src laravel/src'
]));

// -------------------------
// build

gulp.task('build', function(callback) {
		return runSequence(
					'clean',
					[ 'bowerassets','assets','sass','js' ]
			);
});

gulp.task('clean', function(cb) {
	return del([dest], cb);
});

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
	gulp.src(src + '**/*.{html,php}')
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
			paths.adminlte + 'dist/js/app.js',
			src + 'js/**/*.js'
		])
	.pipe(concat('app.js'))
	.pipe(uglify({preserveComments: 'some'})) // Keep some comments
	.pipe(gulp.dest(dest + 'js'))
	.pipe(reload({stream:true}));
});

// -------------------------
// Static server

gulp.task('php', function() {
	php.server({ base: './public/', port: 9998, keepalive: true});
});

gulp.task('browser-sync',['php'], function() {
    browserSync({
        //server: {
            baseDir: './public/',
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
	gulp.watch(src + "**/*.html", ['assets','bs-reload']);
	gulp.watch(src + "**/*.php", ['assets','bs-reload']);
	gulp.watch(src + 'js/**/*.js',['js','bs-reload']);
	gulp.watch(src + 'scss/**/*.sass',['sass','bs-reload']);
	gulp.watch(src + 'img/**/*.{png,jpg,gif,svg}',['imagemin','bs-reload']);
});
