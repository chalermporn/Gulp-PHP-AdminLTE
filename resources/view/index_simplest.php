<?php 
    include('partials/siteconfig.php');
    $pageTitle = "AdminLTE";
    $pageDescription = "Gulp による PHP-AdminLTE 開発環境";
    $pageUrl = "";
    $ogImageUrl = "";
?>

<!DOCTYPE html>
<html>
<?php $page_title = "AdminLTE" ?>
<?php include('partials/html_header.php'); ?>
</head>

<!--
BODY TAG OPTIONS:
=================
Apply one or more of the following classes to get the
desired effect
|---------------------------------------------------------|
| SKINS         | skin-blue                               |
|               | skin-black                              |
|               | skin-purple                             |
|               | skin-yellow                             |
|               | skin-red                                |
|               | skin-green                              |
|---------------------------------------------------------|
|LAYOUT OPTIONS | fixed                                   |
|               | layout-boxed                            |
|               | layout-top-nav                          |
|               | sidebar-collapse                        |
|               | sidebar-mini                            |
|---------------------------------------------------------|
-->
<body class="skin-blue">
<div class="wrapper">

<!-- ヘッダ -->
<?php include('partials/main_header_simplest.php'); ?>

<!-- サイドバー -->
<?php include('partials/sidebar_simplest.php'); ?>

<!-- コンテンツ -->
<div class="content-wrapper">

    <!-- コンテンツヘッダ -->
    <section class="content-header">
        <h1>ページタイトル</h1>
    </section>

    <!-- メインコンテンツ -->
    <section class="content">

        <!-- 1段目 -->
        <div class="box">
            <div class="box-header with-border"><h3 class="box-title">ボックスタイトル</h3></div>
            <div class="box-body">
              <p>ボックスボディー</p>
            </div>
        </div>
    </section>

</div><!-- end content -->


<!-- フッター -->
<?php include('partials/footer.php'); ?>


</div><!-- end wrapper -->

<script src="js/app.js" type="text/javascript"></script>
</body>
</html>
