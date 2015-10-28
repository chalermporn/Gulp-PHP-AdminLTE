<?php 
    include('partials/siteconfig.php');
    $pageTitle = "管理画面トップページ";
    $pageDescription = "Gulp による PHP-AdminLTE 開発環境";
    $pageUrl = "";
    $ogImageUrl = "";
?>

<!DOCTYPE html>
<html>
<head>
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
<!-- <body class="hold-transition skin-blue sidebar-mini"> -->

<div class="wrapper">

<!-- ヘッダ -->
<?php include('partials/main_header_min.php'); ?>

<!-- サイドバー -->
<?php include('partials/sidebar_min.php'); ?>

<!-- コンテンツ -->
<div class="content-wrapper">

    <!-- コンテンツヘッダ -->
    <section class="content-header">
        <h1><?php echo $pageTitle ?></h1>
        <!-- パンくず -->
        <ol class="breadcrumb">
            <li><a href="">Home</a></li>
            <li>現在地</li>
        </ol>
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

        <!-- 2段目 -->
        <div class="row">
            <!-- col -->
            <div class="col-xs-6">
            <div class="box box-primary">
                <div class="box-header"><h3 class="box-title">ボックスタイトル左(col-xs-6)</h3></div>
                <div class="box-body">
                    <p>ボックスボディー</p>
                </div>
            </div>
            </div>

            <!-- col -->
            <div class="col-xs-6">
            <div class="box box-danger">
                <div class="box-header"><h3 class="box-title">ボックスタイトル右(col-xs-6)</h3></div>
                <div class="box-body">
                    <p>ボックスボディー</p>
                </div>
            </div>
            </div>
        </div><!-- end row -->

    </section>

</div>

<?php include('partials/footer.php'); ?>

</div><!-- end wrapper -->

<script src="js/app.js" type="text/javascript"></script>
</body>
</html>
