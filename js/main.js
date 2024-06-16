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

// gallery PopUps

let imgPopup = document.createElement('div'),
  bigImg = document.createElement('img'),
  workSection = document.querySelector('.gallery');

imgPopup.classList.add('imgPopup');
workSection.appendChild(imgPopup);

imgPopup.style.cssText = 'justify-content: center; display: none; align-items: center;';
imgPopup.appendChild(bigImg);

workSection.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target && e.target.matches('.gallery__img')) {
    imgPopup.style.display = 'flex';
    const path = e.target.getAttribute('src');
    console.log(path);
    bigImg.setAttribute('src', path);
  }

  if (e.target && e.target.matches('.imgPopup')) {
    imgPopup.style.display = 'none';
  }
})
