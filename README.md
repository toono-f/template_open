# Folders
| folder name | purpose |
| --- | --- |
| project-ejs | ejsを利用した開発テンプレート。 |
| project-gatsby | Next.jsの方が自由度が高かったため、更新停止。以下を運用・更新中<br>https://github.com/toono-f/template-nextjs |
| project-pug | pugを利用した開発テンプレート。 |
## 各project内の共通ディレクトリ
| folder name | purpose |
| --- | --- |
| build | `yarn build` を実行すると書き出される。主に納品・公開用のファイルとして扱う。 |
| dst | `yarn start` を実行すると書き出される。開発時にローカルサーバーから参照するファイル。 |
| src | 開発に使用するファイル。アニメーションライブラリ等を含みます。 |
## node.js
**12.22.1**
## src（開発ディレクトリ）
[Pug](https://pugjs.org/) ※拡張子は `.pug` を使用
### css
[SCSS](http://sass-lang.com/) ※拡張子は `.scss` を使用
### JavaScript
ECMAScript5互換（Babel）
### images
PNG, JPEG, SVG
### file
画像以外のファイル

# 環境設定（共通）
① node.jsのバージョン管理ツール導入
● windowsの場合
nodistをインストール  
参考：https://www.granfairs.com/blog/staff/install-nodist

● Macの場合
anyenv + nodenv をインストール  
参考：https://qiita.com/kyosuke5_20/items/eece817eb283fc9d214f

※パスが通らない場合は以下も参考  
参考：https://qiita.com/282Haniwa/items/a764cf7ef03939e4cbb1

② プロジェクトディレクトリでのnode.jsのバージョンが「12.22.1」であることを確認  
`node -v`

③ yarnをグローバルインストール  
参考：https://qiita.com/suisui654/items/1b89446e03991c7c2c3d

④ 必要パッケージの一括インストール  
`yarn install`

⑤vscodeの以下プラグインをインストール  
- [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint.vscode-stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

# コーディング方針
## ファイル命名規則
- 基本的にアルファベットは全て小文字とする。
## HTML
- リンクはルート相対パスで指定する。
## CSS(SCSS)
- ページ内リンク設定時を除いて、基本的にidは使用しない。
- CSS設計と命名規則はFlocssを採用する。
- JavaScriptで使用するクラスには `js-` を prefix として付与する。
- ブラウザのfont-size設定を考慮し、基本的に px ではなく rem で設定する。  
  ※ 参考：https://daib-log.com/unit/
- リセットcssは以下を参考に「_normalize.scss」に設定済み。  
  http://meyerweb.com/eric/tools/css/reset/ v2.0 | 20110126
- scssにおける除算は「math.div」を利用する。  
  ※ 参考：https://kaminarimagazine.com/web/2021/07/09/divide-by-slash-is-deprecated-and-will-be-removed/
## 画像
- 画像はビルド時に最適化を行うため制作段階では画質を落としたり圧縮したりする必要はありません。  
  圧縮された画像は /build/assets/images/ 以下に配置されます。  
  圧縮前の画像は /build/assets/images/no_compress/ 以下に配置されます。  
  ※画像を圧縮させたくない場合は「no_compress」というフォルダを作成し、その配下に配置する。
## フォント
- ダウンロードしたフォントファイルをサブセット化したものをCSSで読み込ませる。  
  ※ 参考：https://wpqw.jp/snippet/webfont/
- headタグ内では preload を使って読み込ませる。
## その他設定
- 文字コード: UTF-8 (BOMなし)
- 改行コード: CR+LF
- インデント: 半角スペース2個

# 開発メモ
## babel
- babel/preset-env で polyfill するとビルドに失敗する問題の解決
https://blog.ojisan.io/polyfill-trouble-on-babel
- windowsでローカルサーバ起動時にIEでエラーを吐く場合、@babel/polyfillを利用する
https://qiita.com/yakumomutsuki/items/3f4e823da2177d990d4f

# 更新メモ
## Babelのバージョンアップに伴い、非推奨になった `@babel/polyfill` のimportを削除。
代替として `@babel/preset-env` と `@babel/ransform-runtime` を導入。
https://aloerina01.github.io/blog/2019-06-21-1
## 利用推奨スライダープラグインを「slick」から「Swiper」に変更。
- jqueryに依存しない
- slickやbxsliderなどより軽く、floatではなくflexが使われているのでCSSのカスタマイズもしやすい
- アップデートが盛んに行われている
※ そのまま読み込むとIEでは使えない（本テンプレートでは、IEに対応させるように調整済み）
## intersection-observer（インターセクションオブザーバー）の導入
交差監視 要素と要素が交差しているかどうか（そして交差し終わったかどうか）を監視する。
つまり要素がビューポートに現れたかどうかなどを検知してくれて、そのタイミングで行う処理も命令できる。
- スクロールイベントのように絶えず要素の位置を確認することを避けられる
- Googleにも推奨されている（google robot がwebサイトの診断がしやすい）
※ そのまま読み込むとIEでは使えない（本テンプレートでは、IEに対応させるように調整済み）
## purgeCSSの導入
不要なUtilityのCSSを削除できる。CMS流し込み時は使用注意。ホワイトリストに入れるなどする。
## パンくずリストを生成する関数の実装
詳細は `/src/html/_mixin/_breadcrumb.pug` を確認。構造化にも対応した記述も用意済み
## build時にhtml圧縮
ON・OFFの切り替えは `/gulp/tasks/replace.js` で行う。
## headタグの設定情報追加（構造化等）
JSON-LDを採用。
## Webp変換自動対応
不要であれば、`gulpfile.js`を調整。
## GreenSockの導入
## パッケージマネージャーを **npm** から **yarn** に移行
## css,jsを読み込ませる記述にタイムスタンプの付与
## scssのsourcemapの読み込み設定（デフォルトはOFF）
## prettier + eslint + stylelint の導入
## Dart Sassの導入

# git-ftpの導入(mac)
`brew install git-ftp`  
`git config git-ftp.user ユーザー名`  
`git config git-ftp.password パスワード`  
`git config git-ftp.build.url ftp://接続先のURL`  
`git config git-ftp.build.syncroot ローカルのディレクトリ`  
`git ftp init -s build` もしくは `git ftp push -s build`