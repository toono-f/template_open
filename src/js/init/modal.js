// デフォルトのスクロールバーのstyleをカスタマイズする場合
// 参考: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
// import SimpleBar from 'simplebar';
// import '../style/simplebar/simplebar.scss';
// スクロールバーを新規生成する場合
// 参考； https://github.com/mdbootstrap/perfect-scrollbar
import PerfectScrollbar from 'perfect-scrollbar';
import '../style/perfect-scrollbar/perfect-scrollbar-edit.scss';
import '../style/perfect-scrollbar/perfect-scrollbar.scss';

export default function () {
  // iOS(ipadOS含む)端末対応＆背景固定＆スクロールバーのガタ付き防止
  // 参考: https://myscreate.com/optional-modal/

  let perfectScroll; // スクロールバーの初期化
  const modalArea = document.querySelectorAll('.js-modal-area');
  const openModal = document.querySelectorAll('.js-modal-open');

  for (let i = 0; i < modalArea.length; i++) {
    const scroll = modalArea[i].querySelector('.js-perfect-scroll'); // スクロールバーを設定する要素の取得
    const closeModal = modalArea[i].querySelector('.js-modal-close');
    const modalBg = modalArea[i].querySelector('.js-modal-bg');
    const toggle = [openModal[i], closeModal, modalBg].filter(Boolean);

    const bodyScrollPrevent = (flag, modal) => {
      let scrollPosition;
      const body = document.getElementsByTagName('body')[0];
      const ua = window.navigator.userAgent.toLowerCase();
      const isiOS = ua.indexOf('iphone') > -1 || ua.indexOf('ipad') > -1 || (ua.indexOf('macintosh') > -1 && 'ontouchend' in document);
      const scrollBarWidth = window.innerWidth - document.body.clientWidth;

      if (flag) {
        body.style.paddingRight = scrollBarWidth + 'px';
        if (isiOS) {
          scrollPosition = -window.pageYOffset;
          body.style.position = 'fixed';
          body.style.width = '100%';
          body.style.top = scrollPosition + 'px';
        } else {
          body.style.overflow = 'hidden';
        }
        perfectScroll = new PerfectScrollbar(scroll); // スクロールバーの生成
        // new SimpleBar(document.querySelector(scroll)); // カスタマイズスクロールバーの生成
      } else {
        addEventListenerOnce(modal, 'transitionend', () => {
          body.style.paddingRight = '';
          if (isiOS) {
            scrollPosition = parseInt(body.style.top.replace(/[^0-9]/g, ''));
            body.style.position = '';
            body.style.width = '';
            body.style.top = '';
            window.scrollTo(0, scrollPosition);
          } else {
            body.style.overflow = '';
          }
          // 生成したスクロールバーを破棄
          if (perfectScroll) {
            perfectScroll.destroy();
            perfectScroll = null;
          }
          // if (simpleBar) simpleBar.unMount(); // カスタマイズスクロールバーを破棄
        });
      }
    };
    const addEventListenerOnce = (node, event, callback) => {
      const handler = (e) => {
        callback.call(this, e); // transitionendイベントの回数はCSSプロパティ設定数に依存する（thisの参照先は nodal = modal = modalArea）
        node.removeEventListener(event, handler); // 2回以上イベントリスナーが発火しないようにする
      };
      node.addEventListener(event, handler);
    };

    Array.prototype.forEach.call(toggle, (toggle) => {
      toggle.addEventListener('click', () => {
        if (!modalArea[i].classList.contains('is-show')) {
          modalArea[i].classList.add('is-show');
          bodyScrollPrevent(true);
        } else {
          modalArea[i].classList.remove('is-show');
          bodyScrollPrevent(false, modalArea[i]);
        }
      });
    });
  }
}
