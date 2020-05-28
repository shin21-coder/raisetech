$(function () {
  let body = $(document.body);
  $('.slide-target').on('click', function () {
    // $('.side-menu').toggleClass('open');
    $('.side-menu').animate({'marginRight':'284px'},300)
    $(body).toggleClass('open');

  });
  $('.side-menu__icon').on('click', function () {
    $('.side-menu').animate({ 'marginRight': '0' }, 300)
    // $('.side-menu').toggleClass('open');
    $(body).toggleClass('open');

  })
 });