import '@babel/polyfill'; // IE もしくは safari 10まで対応する場合、コメント解除
// ブラウザ（デバイス）分岐処理をする場合、コメント解除
// import UaParser from 'ua-parser-js';
// const uaParser = new UaParser();
import sleep from 'js-util/sleep';
const page = document.querySelector('.js-page');
const pageId = page.getAttribute('data-page-id');

const init = async () => {
  // const browser = uaParser.getBrowser().name;
  // if (browser === 'Safari') require('./init/safari').default(); // safari
  // if (browser === 'IE') require('./init/ie').default(); // IE
  await sleep(100);

  require('./init/observer').default(); // スクロール連動エフェクト
  // require('./init/smoothScroll').default(); // スムーズスクロール
  // require('./init/smoothScrollbar').default(); // スムーズスクロールバー

  switch (pageId) {
    case 'modal':
      require('./init/modal').default(); // モーダルウィンドウ
      break;
    case 'chart':
      require('./init/chart').default(); // グラフ描画(重いので未使用時はコメントアウト推奨)
      break;
    case 'slider':
      require('./init/slider').default(); // スライダープラグイン（swiper）
      break;
    case 'lightbox':
      require('./init/luminous.js').default(); // 拡大画像をポップアップ表示（Luminous）
      break;
    case 'cursor':
      require('./init/cursor.js').default(); // Mouse Stalker
      break;
    case 'scrollhint':
      require('./init/scrollhint.js').default(); // Mouse Stalker
      break;
    case 'scrollbar':
      require('./init/scrollbar.js').default(); // SimpleBar
      break;
    default:
  }
  // JS処理が終わった後にページを表示させたい場合
  // page.style.opacity = 1;
  // page.style.visibility = 'visible';
};

init();
