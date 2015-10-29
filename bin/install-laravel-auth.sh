
# Add Service Provider.
gsed -i -e "/^ *'providers' => \[$/a \\\t\\t\\t\\tontheroadjp\\\LaravelAuth\\\LaravelAuthServiceProvider::class," config/app.php

# Add auto loader.
gsed -i -e '/^ *\"psr-4\": {$/a \\t\t\t\t\t\t"ontheroadjp\\\\\LaravelAuth\\\\": "vendor/ontheroadjp/Laravel-Auth/src/",' composer.json

# exec. dump-autoload.
composer dump-autoload

# Copy required JQuery plugin
cp -r ../bower_components/AdminLTE/plugins/iCheck public/js

