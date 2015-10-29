
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

var paths = {
	'jquery': 'bower_components/jquery/',
	'bootstrap': 'bower_components/bootstrap-sass/assets//',
	'fontawesome': 'bower_components/font-awesome/',
	'adminlte': 'bower_components/AdminLTE/',
	'src': 'src/',
	'lara_public': 'public/',
	'lara_resources': 'resources/',
	'lara_vendor': 'vendor/ontheroadjp/gulp-laravel-adminlte',
}


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
	return del([paths.lara_public], cb);
});

// -------------------------
// Bower Assets

gulp.task('bowerassets', function() {
	gulp.src(paths.bootstrap + 'fonts/bootstrap/**')
		.pipe(gulp.dest(paths.lara_public + 'fonts/bootstrap'));
	gulp.src(paths.fontawesome + 'fonts/**')
		.pipe(gulp.dest(paths.lara_public + 'fonts'));
	gulp.src(paths.adminlte + 'dist/css/**')
		.pipe(gulp.dest(paths.lara_public + 'css'));
	gulp.src(paths.adminlte + 'dist/css/skins/**')
		.pipe(gulp.dest(paths.lara_public + 'css/skins'));
	gulp.src(paths.adminlte + 'dist/img/**.{png,jpg,gif,svg}')
        .pipe(imagemin({optimizationLevel: 7}))
		.pipe(gulp.dest(paths.lara_public + 'img/adminlte'));
});

// -------------------------
// Assets

gulp.task('sed',shell.task([ 
	'sh ../laravelsettings.sh'
]));

gulp.task('assets', function() {
	
	// to resource/views/
	gulp.src(paths.src + 'views/**/*.{html,php}')
		.pipe(gulp.dest(paths.lara_resources + 'views/'));

	// to resource/lang/
	gulp.src(paths.src + 'lang/**/*.{php,mo,po}')
		.pipe(gulp.dest(paths.lara_resources + 'lang/'));

	// to vendor/ontheroadjp/gulp-laravel-adminlte/
	gulp.src(paths.src + 'app/Providers/**/*.php')
		.pipe(gulp.dest(paths.lara_vendor ));
	
	// ontheroadjp\gulp-laravel-adminlte\GulpLaravelAdminLTEServiceProvider::class,

	// to public/
	gulp.src(paths.src + 'img/**.{png,jpg,gif,svg}')
	    .pipe(imagemin({optimizationLevel: 7}))
		.pipe(gulp.dest(paths.lara_public + 'img'));
	
	// to public/ 
	gulp.src( 'public_original/index.php')
		.pipe(gulp.dest(paths.lara_public));
	
});

// -------------------------
// Sass
gulp.task('sass', function () {
	sass(paths.src + 'sass',{
			style: 'expanded',
			sourcemap: true
		}
	)
	.pipe(pleeease({
		autoprefixer: {"browsers": ["last 4 versions", "Android 2.3"]},
		minifier: false
	}))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(paths.lara_public + 'css'))
	.pipe(reload({stream:true}));
});

// -------------------------
// Js-concat-uglify

gulp.task('js', function() {
	gulp.src([
			paths.jquery + 'dist/jquery.js',
			paths.bootstrap + 'javascripts/bootstrap.js',
			paths.adminlte + 'dist/js/app.js',
			paths.src + 'js/**/*.js'
		])
	.pipe(concat('app.js'))
	.pipe(uglify({preserveComments: 'some'})) // Keep some comments
	.pipe(gulp.dest(paths.lara_public + 'js'))
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
	gulp.watch(paths.src + "**/*.html", ['assets','bs-reload']);
	gulp.watch(paths.src + "**/*.php", ['assets','bs-reload']);
	gulp.watch(paths.src + 'js/**/*.js',['js','bs-reload']);
	gulp.watch(paths.src + 'scss/**/*.sass',['sass','bs-reload']);
	gulp.watch(paths.src + 'img/**/*.{png,jpg,gif,svg}',['imagemin','bs-reload']);
});
