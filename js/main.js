// header fixed

let header = document.querySelector('.header'),
  headerH = document.querySelector('.header').clientHeight;

document.onscroll = function () {
  let scroll = window.scrollY;

  if (scroll > headerH + 400) {
    header.classList.add('header__fixed');
    document.body.style.paddingTop = headerH + 'px';
  } else {
    header.classList.remove('header__fixed');
    document.body.removeAttribute('style');
  }
}