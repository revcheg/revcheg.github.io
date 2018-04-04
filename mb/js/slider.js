$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      autoplay: false
    }
  }]
});

$('.type__flex--mobile').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  // infinite: true,
  slidesToShow: 1,
  arrows: false,
  dots: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      autoplay: false
    }
  }]
});

$('.comment__slider').slick({
  centerMode: true,
  // centerPadding: '60px',
  infinity: true,
  slidesToShow: 3,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      arrows: false
    }
  }]
});