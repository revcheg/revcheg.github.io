$(window).scroll( function() {
  if ($(window).scrollTop() > 90) {
    $('.coin').addClass('coin-bg');
  }
  else {
    $('.coin').removeClass('coin-bg');
  }
});