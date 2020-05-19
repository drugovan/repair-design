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

// projectsSwiper
  var projectsSwiper = new Swiper('.projects__swiper-container', {
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
    pagination: {
      el: '.projects__swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
  });

// styles for projectsSwiper pagination
  var projectsNext = $('.projects__swiper-button-next'),
      projectsPrev = $('.projects__swiper-button-prev'),
      projectsBullets = $('.projects__swiper-pagination');

  projectsBullets.css('left', projectsPrev.width() + 21);
  projectsNext.css('left', projectsPrev.width() + 20 + projectsBullets.width() + 23);
// ..styles for projectsSwiper pagination

// stepsSwiper
  var stepsSwiper = new Swiper('.steps__swiper-container', {
    loop: true,
    spaceBetween: 150,
    roundLengths: true,
    navigation: {
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev',
    },
    pagination: {
      el: '.steps__swiper-pagination',
      clickable: true,
      type: 'bullets',
    },

  });


// stepsSwiperImg
  var stepsSwiperImg = new Swiper('.steps__swiper-container--img', {
    loop: true,
    autoHeight: true,
    spaceBetween: 150,
    navigation: {
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev',
    },
    pagination: {
      el: '.steps__swiper-pagination',
      clickable: true,
      type: 'bullets',
    },
    on: {
      init: function () {
        var currentSlide = stepsSwiper.realIndex;
        console.log('stepsSwiper init', currentSlide)
        $('.steps-list__item').eq(currentSlide).addClass('active');
      },
    }
  })

  stepsSwiperImg.on('slideChange', function () {

    console.log('stepsSwiperImg slideChange', stepsSwiper.realIndex)
    var currentSlide = stepsSwiper.realIndex;
    $('.steps-list__item.active').removeClass('active');
    $('.steps-list__item').eq(currentSlide).addClass('active');

  })

// styles for stepsSwiper pagination
  var stepsNext = $('.steps__swiper-button-next'),
      stepsPrev = $('.steps__swiper-button-prev'),
      stepsBullets = $('.steps__swiper-pagination');

  stepsBullets.css('left', stepsPrev.width() + 21);
  stepsNext.css('left', stepsPrev.width() + 21 + stepsBullets.width() + 22);
// ..styles for stepsSwiper pagination

//swithing the slider by clicking on '.steps-list__item'
  $(document).on('click', '.steps-list__item', function () {
    var toSlide = $(this).data('toslide')
    stepsSwiperImg.slideTo(toSlide);
    stepsSwiper.slideTo(toSlide);
    numberSlide();
    $('.steps-list__item.active').removeClass('active');
    $(this).addClass('active');
  })
// ..swithing the slider by clicking on '.steps-list__item'

// counter for stepsSlider
  var totalSlides = $('.steps__swiper-slide:not(.swiper-slide-duplicate)').length;
  var numberSlide = () => {
    $('.numbers-slide').html(stepsSwiper.activeIndex + '/' + totalSlides);
  }

  $('.numbers-slide').html(stepsSwiper.activeIndex + '/' + totalSlides);
  $('.steps__swiper-pagination').on('click', numberSlide);

  stepsPrev.on('click', () => {
    if (stepsSwiper.activeIndex == 0) {
      $('.numbers-slide').html(totalSlides + '/' + totalSlides);
    } else { numberSlide() };
  });
  stepsNext.on('click', () => {
    if (stepsSwiper.activeIndex == totalSlides + 1) {
      $('.numbers-slide').html(1 + '/' + totalSlides);
    } else { numberSlide() };
  });
// ..counter for stepsSlider

});