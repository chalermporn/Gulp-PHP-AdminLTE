gsed -i -e "/^ *'providers' => \[$/a \\\t\\t\\t\\tontheroadjp\\\LaravelAuth\\\LaravelAuthServiceProvider::class," config/app.php
gsed -i -e '/^ *\"psr-4\": {$/a \\t\t\t\t\t\t"ontheroadjp\\\\\LaravelAuth\\\\": "vendor/ontheroadjp/Laravel-Auth/src/",' composer.json
composer dump-autoload
cp -r ../bower_components/AdminLTE/plugins/iCheck public/js

