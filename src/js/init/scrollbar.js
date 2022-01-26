// デフォルトのスクロールバーのstyleをカスタマイズする場合
// 参考: https://github.com/Grsmto/simplebar/tree/master/packages/simplebar
import SimpleBar from 'simplebar';
import '../style/simplebar/simplebar-edit.scss';
import '../style/simplebar/simplebar.scss';

export default function () {
  const scroll = document.querySelector('.js-sinmple-scroll');
  new SimpleBar(scroll); // カスタマイズスクロールバーの生成
}
