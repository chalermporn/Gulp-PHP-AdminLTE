gsed -i -e "/^ *'providers' => \[$/a \\\t\\t\\t\\tontheroadjp\\\GulpLaravelAdminLTE\\\GulpLaravelAdminLTEServiceProvider::class," config/app.php

composer dump-autoload
