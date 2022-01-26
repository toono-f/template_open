# 環境設定
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


# Command
| command name | purpose |
| --- | --- |
| `yarn start` | 開発時に実行するコマンド。 |
| `yarn build` | 納品・公開用のファイルを生成するコマンド。 |
| `yarn html` | pugからhtmlに変換するコマンド |
| `yarn css` | scssからcssに変換するコマンド（* htmlビルド後推奨）|
| `yarn script` | jsのトランスパイルを行うコマンド |
| `yarn file` | 画像の圧縮、その他ファイルのコピーを行うコマンド |
| `yarn fix:css` | cssの構文チェックから整形まで行うコマンド |
| `yarn fix:js` | jsの構文チェックから整形まで行うコマンド |

\* PurgeCSSの機能で生成されたhtmlファイルで利用されていないクラスを削除するため。



# Folders
| folder name | purpose |
| --- | --- |
| build | `yarn build` を実行すると書き出される。主に納品・公開用のファイルとして扱う。 |
| dst | `yarn start` を実行すると書き出される。開発時にローカルサーバーから参照するファイル。 |
| src | 開発に使用するファイル。アニメーションライブラリ等を含みます。 |
| project-pug | 上記ファイル(src)からライブラリ等を取り除いた開発用ファイル。実際に開発を始めていくのに使ってください。※PurgeCSSの設定は解除済み |
| project-ejs | 上記ファイルのejsバージョン。 |



# src（開発ディレクトリ）
## html
[Pug](https://pugjs.org/) ※拡張子は `.pug` を使用
## css
[SCSS](http://sass-lang.com/) ※拡張子は `.scss` を使用
## JavaScript
ECMAScript5互換（Babel）
## images
PNG, JPEG, SVG
## file
画像以外のファイル
## font
日本語フォント : Noto Sans JP  
英語フォント : montserrat  
アイコン : font-awesome（コメント解除必要）  
**※デザインに応じて変更してください。**
## node.js
**12.22.1**

※ パッケージ「slash」をv4.0.0(2021年4月リリース)にアップデートするとエラーが発生するため、アップデートしない。  
https://github.com/sindresorhus/slash/releases

※ パッケージ「gulp-imagemin」はv8.0.0にアップグレードしない。いずれ対応必要あり。  
https://crieit.net/posts/gulp-imagemin-become-pure-esm-package-20210817

# コーディング方針
## ファイル命名規則
- 基本的にアルファベットは全て小文字とする。
## HTML(Pug)
- リンクはルート相対パスで指定する。
- build時におけるhtmlの圧縮設定を解除したい場合は「gulp/tasks/replace.js」の12~17行目をコメントアウトする。
## CSS(SCSS)
- ページ内リンク設定時を除いて、基本的にidは使用しない。
- CSS設計と命名規則はFlocssを採用する。
- JavaScriptで使用するクラスには `js-` を prefix として付与する。
- ブラウザのfont-size設定を考慮し、基本的に px ではなく rem で設定する。  
  ※ 参考：https://daib-log.com/unit/
- スマートフォンのあらゆる端末サイズに対応することを考慮し、スマホコーティングはvw単位の利用を推奨する。  
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