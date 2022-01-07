$('.language__button').click(function () {
  $('.languages__list').toggleClass('languages__list--active');
});

$('.language').click(function () {
  $('.languages__list').find('*').removeClass('language--active')
  $(this).toggleClass('language--active');
  $('.languages__list').removeClass('languages__list--active')
});

$('.hamburger').click(function () {
  $('.body').toggleClass('body--active');
  $('.hamburger').toggleClass('hamburger--active');
});

$('.nav__dropdown__button').click(function () {
  $(this).parent().parent().toggleClass('nav__item--active');
});