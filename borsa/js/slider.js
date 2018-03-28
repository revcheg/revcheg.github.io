$('.slider').slick({
  autoplay: false,
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

$('.news__slider').slick({
  autoplay: false,
  autoplaySpeed: 2000,
  // infinite: true,
  slidesToShow: 3,
  arrows: true,
  dots: false,
  responsive: [{
    breakpoint: 768,
    settings: {
      autoplay: false
    }
  }]
});

$('.comment__slider').slick({
  centerMode: false,
  // centerPadding: '60px',
  slidesToShow: 5,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3
    }
  }]
});