// ==========================================================================
// スムーススクロール
// ==========================================================================
// import smoothscroll from 'smoothscroll-polyfill'; // IE対応する場合、コメント解除
// smoothscroll.polyfill(); // IE対応する場合、コメント解除

export default function () {
  // アンカーリンクを設定しているaタグを取得
  const links = document.querySelectorAll('a[href^="#"]');
  const linksTarget = Array.prototype.slice.call(links);
  // ヘッダーの値を取得
  const header = document.querySelector('header');
  const headerHight = header.offsetHeight;
  if (header) {
    linksTarget.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        // クリックした要素のリンク先を取得
        const linkId = link.getAttribute('href');
        // 遷移先の要素を取得
        const linkDom = document.querySelector(linkId);
        // 画面上部から要素までの距離を取得
        const linkPosition = linkDom.getBoundingClientRect().top;
        // 現在のスクロール距離を取得
        const currentPosition = window.pageYOffset;
        // スクロール位置に持たせるバッファ
        const buffer = 0;
        const position = linkPosition + currentPosition - buffer - headerHight;
        window.scroll({
          top: position,
          behavior: 'smooth',
        });
      });
    });
    // ページ外からの処理
    if (document.URL.match('#')) {
      const str = location.href;
      const cut_str = '#';
      const index = str.indexOf(cut_str);
      const href = str.slice(index);
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const position = rect.top + scrollTop - headerHight;
        window.scroll({
          top: position,
          behavior: 'smooth',
        });
      }
    }
  }
}
