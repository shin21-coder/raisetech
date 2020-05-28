$(function () {
  let body = $(document.body);
  $('.slide-target').on('click', function () {
    $('.side-menu').toggleClass('open');
    $(body).toggleClass('open');

  });
  $('.side-menu__icon').on('click', function () {
    $('.side-menu').toggleClass('open');
    $(body).toggleClass('open');

  })
 });