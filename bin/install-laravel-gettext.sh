
# exec. vendor:publish
php artisan vendor:publish

# Add Service Provider.
gsed -i -e "/^ *'providers' => \[$/a \\\t\\t\\t\\tXinax\\\LaravelGettext\\\LaravelGettextServiceProvider::class," config/app.php

# Add auto roader.
gsed -i -e '/^ *\"psr-4\": {$/a \\t\t\t\t\t\t"Xinax\\\\\LaravelGettext\\\\": "vendor/xinax/laravel-gettext/src/Xinax/LaravelGettext/",' composer.json


# Add Middleware.
gsed -i -e '/^ *protected $middleware = \[$/a \\t\t\\Xinax\\LaravelGettext\\Middleware\\GettextMiddleware::class,' app/Http/Kernel.php

# Modify config file.
gsed -i -e "/^ *'supported-locales' => array($/a \\\t\\t\\t\\t'ja_JP'," config/laravel-gettext.php

# exec. dump-autoload.
composer dump-autoload
