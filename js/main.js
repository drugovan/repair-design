/*
document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector('.modal')
  const modalBtn = document.querySelectorAll('[data-toggle=modal]')
  const closeBtn = document.querySelector('.modal__close')
  const modalDialog = document.querySelector('.modal__dialog')
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  document.addEventListener('keyup', (e) => {
    if (e.keyCode == 27) {
      modal.classList.remove('modal--visible');
    }
  });

  modal.addEventListener('click', (e) => {
    if (e.target == modalDialog.parentNode) {
      switchModal();
    }
  });

});
*/



$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      modalDialog = $('.modal__dialog');
  var scrollUp = $('.scrollup');

  modalBtn.on('click', () => {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', () => {
    modal.toggleClass('modal--visible');
  });

  $(document).on('keyup', (e) => {
    if (e.keyCode == 27) {
      modal.removeClass('modal--visible');
    }
  });

  modal.on('click', (e) => {
    if (!modalDialog.is(e.target) // если клик был не по нашему блоку
      && modalDialog.has(e.target).length === 0) { // и не по его дочерним элементам
        modal.toggleClass('modal--visible'); // скрываем его
    }
  });

// scrollup
  $(window).scroll( () => {
    if ($(this).scrollTop() > 200) {
      scrollUp.fadeIn();
    } else {
      scrollUp.fadeOut();
    }
  });

  scrollUp.click( () => {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 21 + bullets.width() + 22);
  bullets.css('left', prev.width() + 21)

});