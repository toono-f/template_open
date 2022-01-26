// import Swiper from 'swiper'; // 最小限の機能読み込み
// import Swiper from 'swiper/bundle'; // 全機能を読み込む場合
import Swiper, { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper'; // 機能を追加する場合
import '../style/swiper/swiper-bundle-edit.scss';
import '../style/swiper/swiper-bundle.scss';

export default function () {
  Swiper.use([Autoplay, Navigation, Pagination, Scrollbar]);
  // ==========================================================================
  // slider01
  // ==========================================================================
  const option = {
    // effect: 'flip', // 全機能を読み込む場合有効
    // デフォルト設定
    direction: 'horizontal',
    speed: 300,
    spaceBetween: 0,
    slidesPerView: 1,
    breakpoints: {},
    loop: true,
    // 以下機能追加設定
    autoplay: {
      delay: 3000,
      disableOnInteraction: false, // フリック後も止まらないように設定
    },
    // 以下IEで有効化するためには、CSSのカスタマイズが必要
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  };
  const swiper = new Swiper('.js-silde-swiper', option); // eslint-disable-line
  // ==========================================================================
  // slider02
  // ==========================================================================
  const option02 = {
    direction: 'horizontal',
    speed: 300,
    loop: false,
    // ウィンドウサイズ 767px以下
    slidesPerView: 2,
    // slidesPerGroup: 1,
    spaceBetween: '7%',
    breakpoints: {
      // ウィンドウサイズ 768px以上
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      // ウィンドウサイズ 1024px以上
      1024: {
        slidesPerView: 4,
        spaceBetween: 45,
      },
      // ウィンドウサイズ 1366px以上
      1366: {
        slidesPerView: 5,
        spaceBetween: 45,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: false,
      draggable: true,
    },
  };
  const swiper02 = new Swiper('.js-silde-swiper02', option02); // eslint-disable-line
}
