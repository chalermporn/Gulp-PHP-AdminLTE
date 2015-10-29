# Gulp-PHP-AdminLTE（for Laravel 5.1）

* Gulp による お手軽 Laravel 開発環境の構築。

**主な機能**

* Laravel 5.1 クリーンインストール
* SASS（`.scss`）の コンパイル & 連結 & ミニファイ
* Javascript ファイルの連結 & ミニファイ
* 画像ファイル（`.png``.gif`,`.jpg`,`.svg`）の画像最適化
* PHP ビルトインサーバー
* オートリロード

## Install

```
$ git clone -b for-laravel https://github.com/ontheroadjp/Gulp-PHP-AdminLTE.git
$ cd Gulp-PHP-AdminLTE
$ npm install
$ gulp
```

**Installed**

* Laravel 5.1.11
* AdminLTE 2.3.2
* Bootstrap 3.3.5
* Font-Awesome 4.4.0
* Jquery 2.1.4

## Build

`larave/`ディレクとりに移動して`gulp build` を実行すれば必要なファイルが配置される

```
$ cd laravel
$ gulp build
```

## Run

`gulp` コマンドで PHP ビルトインサーバーが起動して`localhost:9999`でアクセス可能。

```
$ gulp
```

PHP ビルトインサーバーが起動している状態で`src/`以下のファイルを修正すると、修正したファイルは自動的に`laravel/public/`へ配置され、ブラウザがリロードされる。

## LICENCE

### Major components:

* Laravel: MIT License
* gulp: MIT License
* AdminLTE: MIT Licence
* jQuery: MIT/GPL License
* Bootstrap: MIT Licence
* Font-Awesome: SIL Open Font License
