import ScrollHint from 'scroll-hint';
import '../style/scrollhint/_scroll-hint-edit.scss';
import '../style/scrollhint/_scroll-hint.scss';

export default function () {
  new ScrollHint('.js-scrollable', {
    scrollHintIconAppendClass: 'scroll-hint-icon-white', // white-icon will appear
    // applyToParents: true,
    i18n: {
      scrollable: 'スクロールできます',
    },
  });
}
