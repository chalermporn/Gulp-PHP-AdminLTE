gsed -i -e "/^ *'providers' => \[$/a \\\t\\t\\t\\tontheroadjp\\\GulpLaravelAdminLTE\\\GulpLaravelAdminLTEServiceProvider::class," laravel/config/app.php
gsed -i -e '/^ *\"psr-4\": {$/a \\t\t\t\t\t\t"ontheroadjp\\\\\GulpLaravelAdminLTE\\\\": "vendor/ontheroadjp/gulp-laravel-adminlte/",' laravel/composer.json
cd laravel
composer dump-autoload
