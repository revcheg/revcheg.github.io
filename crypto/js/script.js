$(window).scroll( function() {
  if ($(window).scrollTop() > 500) {
    $('.coin').addClass('coin-bg');
  }
  else {
    $('.coin').removeClass('coin-bg');
  }
});