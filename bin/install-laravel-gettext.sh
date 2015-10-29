php artisan vendor:publish
gsed -i -e "/^ *'providers' => \[$/a \\\t\\t\\t\\tXinax\\\LaravelGettext\\\LaravelGettextServiceProvider::class," config/app.php
gsed -i -e '/^ *protected $middleware = \[$/a \\t\t\\Xinax\\LaravelGettext\\Middleware\\GettextMiddleware::class,' app/Http/Kernel.php
gsed -i -e "/^ *'supported-locales' => array($/a \\\t\\t\\t\\t'ja_JP'," config/laravel-gettext.php
composer dump-autoload
