// const Luminous = require('luminous-lightbox').Luminous;
const LuminousGallery = require('luminous-lightbox').LuminousGallery; // 複数の画像に適用する場合
import '../style/luminous/luminous-basic.scss';
import '../style/luminous/luminous-edit.scss';

export default function () {
  const options = {
    // 拡大画像につけるクラス。'big'を指定すると'big-img'というクラスが追加でつく。(lum-imgというクラスがすでについている。)
    namespace: null,
    // どの属性に拡大画像のパスを指定するか
    sourceAttribute: 'href',
    // 表示するキャプション。関数の指定が可能。
    caption: null,
    // どのイベントで画像を表示するか
    openTrigger: 'click',
    // どのイベントで拡大画像を閉じるか
    closeTrigger: 'click',
    // escキーでクローズさせるかどうか
    closeWithEscape: true,
    // スクロールしたときにクローズさせるかどうか
    closeOnScroll: false,
    // 拡大画像を表示させるlightboxをどこに挿入するか。
    appendToSelector: 'body',
    // オープン時に呼び出す関数
    onOpen: null,
    // クローズ時に呼び出す関数
    onClose: null,
    // 拡大画像に imgix-fluid というクラスをつけるかどうか。
    includeImgixJSClass: false,
  };

  const galleryOpts = {
    arrowNavigation: true,
  };

  const luminousTrigger = document.querySelectorAll('.js-modalImg-trigger');
  if (luminousTrigger !== null) {
    new LuminousGallery(luminousTrigger, galleryOpts, options);
  }
}
