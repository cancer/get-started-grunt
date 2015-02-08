# Get started Grunt for CSS Nite LP39

[CSS Nite LP39「Coder's High 2015：コーディングスタイルの理想と現実」](http://cssnite.jp/lp/lp39/)の、
第4セッション「ビルドツールはじめの一歩」で紹介したGruntのサンプルです。  
※ 本サンプルでは、SCSSのコンパイルに`Sass`を使っています。インストールされてない方は、予めインストールしてください  
[インストール方法はこちら](#Sassのインストール方法)

Node.jsのインストールがお済みでない方は、予めインストールを済ませておいてください。  
[Node.js 公式サイト (インストーラーはこちらから)](http://nodejs.org/)

## サンプルの使い方

- Step 1. 右下の`Download ZIP`ボタンからZIPファイルをダウンロード後、解凍
- Step 2. `ターミナル`もしくは`コマンドプロンプト`をひらき、解凍したフォルダをドラッグ・アンド・ドロップしてEnter
- Step 3. (今作業してるPCで)初めてGruntを使う方は、以下のコマンドを実行
 - 既に使ったことがある方は`Step 4`へ

```
npm install -g grunt-cli
# ※ Macをお使いで、もし↑でエラーが出る場合
sudo npm install -g grunt-cli
```

- Step 4. `grunt-cli`がインストールできたら、以下のコマンドを実行

```
npm install
```

- Step 5. インストールが終わったかな？と思ったら、以下のコマンドを実行
 - インストールが終わると、カーソルの前に`$ `や`> `が表示されていると思います

```
grunt
```

## サンプルで使っているプラグイン

プラグイン | 内容
---- | ----
[grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat) | ファイルの結合を行う
[grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify) | ファイルの圧縮を行う
[grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass) | Sassを実行してSCSSのコンパイルを行う
[grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) | ファイルの変更監視を行う
[grunt-browser-sync](https://github.com/shakyshane/grunt-browser-sync) | ブラウザのリロード・同期を行う

## Sassのインストール方法

- `ターミナル`もしくは`コマンドプロンプト`で、以下のコマンドを実行

```
# Windowsの方
gem install sass
# Macの方
sudo gem install sass
```

※ Windowsをお使いで、Rubyが入っていない方は[こちら](http://rubyinstaller.org/)からインストーラーがダウンロードできます。  
※ 詳しいインストール方法は[CSS Nite LP32のSou-Labさんのスライド](http://cssnite.jp/archives/post_2657.html)が参考になります。

