// import 'intersection-observer'; // IE対応する場合、コメント解除

export default function () {
  const boxes = document.querySelectorAll('.js-scroll-trigger');
  const boxesArray = Array.prototype.slice.call(boxes);
  const options = {
    root: null,
    rootMargin: '-5% 0px',
    threshold: 0,
  };
  const activateIndex = (element) => element.classList.add('is-active');
  const doWhenIntersect = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activateIndex(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(doWhenIntersect, options);
  boxesArray.forEach((box) => observer.observe(box));
}
