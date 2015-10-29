# Gulp-PHP-AdminLTE

* Gulp による お手軽 PHP WEB 開発環境の構築。
* Laravel, JQuery, Bootstrap, Font-Awesome, Admin LTE を利用した WEB サイト構築ができる。

**主な機能**

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
$ bower install
$ gulp laravel-install
```

* AdminLTE 2.3.2
* Bootstrap 3.3.5
* Font-Awesome 4.4.0
* Jquery 2.1.4

## Build

`gulp build` コマンドで必要なファイルが配置される
`gulp sed` コマンドで必要な設定が書き込まれる

```
$ gulp build
$ gulp sed
```

## Run

`gulp` コマンドで PHP ビルトインサーバーが起動して`localhost:9999`でアクセス可能。

```
$ gulp
```

PHP ビルトインサーバーが起動している状態で`src/`以下のファイルを修正すると、修正したファイルは自動的に`public_html/`へ配置され、ブラウザがリロードされる。

## Directory Details

### /src

* 自分で作成した全てのファイルを格納する
* `gulp build`コマンドで`src/`以下の各種ファイルが処理されて`public_html/`へ配置される
* SASS ファイルは `sass/`ディレクトリ内へ
* Javascript ファイルは`js/`内へ

### /public_html

* WEB サイト公開時のドキュメントルート。
* `gulp build` コマンドによって `/public_html` の中身は自動構築される。
* なので `public_html/` 以下は `gulp build` のみによって操作され、直接触ることはない。



### /public_html/js

* WEB サイト公開に必要な全ての Javascript ファイルを格納するディレクトリ。
* `gulp build`コマンドによって以下のディレクトリに配置されている（配置した） Javascript ファイルが`app.js`に結合されて格納される。
* なので HTML からは `app.js`を読み込むだけで良い。
* 作成した Javascript ファイルは /src/js に配置することによって`app.js`に結合される。

**app.js に結合される Javascript ファイル**

`/bower_components/jquery/dist/jquery.js`  
`/bower_components/bootstrap-sass/javascripts/bootstrap.js`  
`/bower_components/AdminLTE/dist/js/app.js`  
`/src/js`（デフォルトでは空）

### /public_html/css

* WEB サイト公開に必要な全ての CSS ファイルを格納するディレクトリ。
* `gulp build`コマンドによって`/src/sass/style.scss`がコンパイルされて`style.css`を生成し、その`style.css`を格納する。
* AdminLTE 関連の CSS（`AdminLTE.css`及び`skins/`内にある CSS） は、`style.css`に結合しない。
* `/src/sass/style.scss` では以下を`@import`している。
* なので HTML からは `AdminLTE.css`,`skins/`,`style.css`を読み込むだけで良い。

```
# Bootstrap3, Font-Awesome の CSS
"/src/sass/bower/_all.scss";

# Bootstrap3 の CSS を上書きするための CSS
"/src/sass/app/_override_bootstrap.scss"; 

 # 自分で定義する CSS
"/src/app/_main.scss";
```

### /public_html/fonts

* WEB サイト公開に必要な全てのフォントファイルを格納するディレクトリ。
* `gulp build`コマンドによって必要な全てのフォントファイルが格納（コピー）される。

**格納されるフォントファイル**

`/bower_components/bootstrap-sass/fonts/bootstrap/`以下全て  
`/bower_components/font-awesome/fonts/`以下全て

### /public_html/img

* WEB サイト公開に必要な全ての画像ファイル（`.png``.jpg``.gif``.svg`）を格納するディレクトリ。
* `gulp build`コマンドによって、画像ファイルを最適化（圧縮）したのち格納（コピー）される。

#### 格納される画像ファイル

`/bower_components/AdminLTE/dist/img/`以下全て  
`/src/img/`以下全て（デフォルトでは空）

## LICENCE

### Major components:

* gulp: MIT License
* AdminLTE: MIT Licence
* jQuery: MIT/GPL License
* Bootstrap: MIT Licence
* Font-Awesome: SIL Open Font License
