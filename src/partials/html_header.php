<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><?php echo $page_title ?></title>

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

<meta property="og:title" content="<?php echo $pageTitle ?> - <?php echo $siteName ?>" />
<meta property="og:description" content="<?php echo $pageDescription ?>" />
<meta property="og:type" content="website" />
<meta property="og:url" content="<?php echo $siteRootUrl ?><?php echo $pageUrl ?>" />
<meta property="og:image" content="<?php echo $ogImageUrl ?>" />
<meta property="og:site_name" content="<?php echo $siteName ?>" />

<meta property="fb:app_id" content="<?php echo $fbAppId ?>" />
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="<?php echo $twitterSite ?>">

<link rel="stylesheet" href="<?php echo $siteRootUrl ?>css/style.css">
<link rel="stylesheet" href="<?php echo $siteRootUrl ?>css/AdminLTE.css">
<link rel="stylesheet" href="<?php echo $siteRootUrl ?>css/skins/_all-skins.css">

<!-- Ionicons -->
<link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->

<!-- Google Analytics -->
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', '<?php echo $googleAnalyticsId ?>', 'auto');
    ga('require', 'displayfeatures');
    ga('send', 'pageview');
  </script>
  <!-- END Google Analytics -->
