
var gulp = require('gulp');
var shell = require('gulp-shell');

// var del = require('del');
// var runSequence = require('run-sequence');

gulp.task('laravel-install',shell.task([ 
	'echo "=== install bower components ..."',
	'bower install',

	'echo "=== install Laravel ..."',
	'composer create-project laravel/laravel --prefer-dist laravel',

	'echo "=== initialize Laravel ..."',
	'mv laravel/gulpfile.js laravel/gulpfile.js.original',
	'mv laravel/package.json laravel/package.json.original',
	'mv laravel/public laravel/public_original',
	'ln -s ../bower.json laravel/bower.json',
	'ln -s ../bower_components laravel/bower_components',
	'ln -s ../gulpfile-for-laravel.js laravel/gulpfile.js',
	'ln -s ../node_modules laravel/node_modules',
	'ln -s ../package.json laravel/package.json',
	'ln -s ../src laravel/src',
	'sh bin/init.sh'
]));

gulp.task('default',['laravel-install']);


