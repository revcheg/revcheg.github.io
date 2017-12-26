$(window).scroll( function() {
  if ($(window).scrollTop() > 485) {
    $('.coin').addClass('coin-bg');
  }
  else {
    $('.coin').removeClass('coin-bg');
  }
});

