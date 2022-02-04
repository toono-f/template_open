import UaParser from 'ua-parser-js';
const uaParser = new UaParser();
const page = document.querySelector('.js-page');
const pageId = page.getAttribute('data-page-id');

const init = async () => {
  const browser = uaParser.getBrowser().name;
  browser === 'Safari' && require('./init/safari').default(); // safari
  switch (pageId) {
    case 'index':
      break;
    default:
  }
};

init();
