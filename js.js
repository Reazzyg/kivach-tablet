
$(document).ready(function () {
  //раскрытие списков и переворачиваение стрелки в разделе описания услуг
  let tabLink = $('.about__item').click(function () {
    let tab = $(this).data('target');
  
    $('.about__arrow', this).toggleClass('about__arrow-rotate');
    $(tab).toggleClass('about__item-info-active');
  });

  // gsap анимация на всех страницах 
  gsap.from('.header-back', { opacity: 0, duration: 1.5, delay: 0.5, x: 40 });
  gsap.from('.header-title', { opacity: 0, duration: 2, delay: 0.7, x: 40 });
  gsap.from('.header-logo', { opacity: 0, duration: 2.5, delay: 0.9, x: 40 });
  gsap.from('.choice-card', { opacity: 0, duration: 1.5, delay: 0.5, y: 40 });
  gsap.from('.content-link__wrapper', { opacity: 0, duration: 1.5, delay: 0.5, y: 0 });
  gsap.from('.content__image', { opacity: 0, duration: 1.5, delay: 0.4, y: 0 });
  gsap.from('.about-wrap', { opacity: 0, duration: 2, delay: 0.5, y: 0 });
  gsap.from('.about__item-1', { opacity: 0, duration: 1, delay: 0.5, y: 60 });
  gsap.from('.about__item-2', { opacity: 0, duration: 1, delay: 0.7, y: 60 });
  gsap.from('.about__item-3', { opacity: 0, duration: 1, delay: 0.9, y: 60 });
  gsap.from('.about__item-4', { opacity: 0, duration: 1, delay: 1, y: 60 });
  gsap.from('.about__item-5', { opacity: 0, duration: 1, delay: 1.2, y: 60 });
  gsap.from('.about__item-6', { opacity: 0, duration: 1, delay: 1.4, y: 60 });
  gsap.from('.about__item-7', { opacity: 0, duration: 1, delay: 1.6, y: 60 });
  gsap.from('.about__item-8', { opacity: 0, duration: 1, delay: 1.8, y: 60 });
  gsap.from('.about__item-9', { opacity: 0, duration: 1, delay: 2.0, y: 60 });
  gsap.from('.about__item-10', { opacity: 0, duration: 1, delay: 2.2, y: 60 });
  gsap.from('.about__item-11', { opacity: 0, duration: 1, delay: 2.4, y: 60 });
  gsap.from('.about__item-12', { opacity: 0, duration: 1, delay: 2.6, y: 60 });
  gsap.from('.about__item-13', { opacity: 0, duration: 1, delay: 2.8, y: 60 });
  gsap.from('.about__item-14', { opacity: 0, duration: 1, delay: 3.0, y: 60 });
  gsap.from('.about__item-15', { opacity: 0, duration: 1, delay: 3.2, y: 60 });
  gsap.from('.about__item-16', { opacity: 0, duration: 1, delay: 3.4, y: 60 });
  gsap.from('.about__item-17', { opacity: 0, duration: 1, delay: 3.6, y: 60 });
});
