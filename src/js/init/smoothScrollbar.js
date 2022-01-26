import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
Scrollbar.use(OverscrollPlugin);

export default function () {
  const options = {
    thumbMinSize: 20,
    renderByPixels: !('ontouchstart' in document),
    alwaysShowTracks: false,
    continuousScrolling: true,
    // 以下 overscrollOptions
    enable: true,
    effect: navigator.userAgent.match(/Android/) ? 'glow' : 'bounce',
    damping: 0.2,
    maxOverscroll: 150,
    glowColor: '#222a2d',
  };
  Scrollbar.init(document.querySelector('.js-page'), options);
}
