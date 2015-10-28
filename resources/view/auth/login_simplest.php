<?php 
    include('../partials/siteconfig.php');
    $pageTitle = "管理画面トップページ";
    $pageDescription = "Gulp による PHP-AdminLTE 開発環境";
    $pageUrl = "";
    $ogImageUrl = "";
?>

<!DOCTYPE html>
<html>
<head>

<?php include('../partials/html_header.php'); ?>
<!-- iCheck -->
<link href="plugins/iCheck/square/blue.css" rel="stylesheet" type="text/css" />
</head>

  <body class="login-page">
    <div class="login-box">

      <div class="login-logo">
        <a href="">管理画面</a>
      </div><!-- /.login-logo -->

      <div class="login-box-body">
        <p class="login-box-msg">ログインして下さい。</p>

        <form action="../index_min.php" method="post">

          <!-- メール -->
          <div class="form-group has-feedback">
            <input type="email" class="form-control" placeholder="Email" />
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
          </div>

          <!-- パスワード -->
          <div class="form-group has-feedback">
            <input type="password" class="form-control" placeholder="Password" />
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>

          <!-- ボタン グリッドでセンタリング-->
          <div class="row">
            <div class="col-xs-4">
            </div><!-- /.col -->
            <div class="col-xs-4">
              <button type="submit" class="btn btn-primary btn-block btn-flat">ログイン</button>
            </div><!-- /.col -->
            <div class="col-xs-4">
            </div><!-- /.col -->
          </div>

        </form>

      </div><!-- /.login-box-body -->
    </div><!-- /.login-box -->

    <script src="js/app.js" type="text/javascript"></script>
    <!-- iCheck -->
    <script src="plugins/iCheck/icheck.min.js" type="text/javascript"></script>
  </body>
</html>
