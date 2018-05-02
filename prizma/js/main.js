// Slick
$('.slider').slick({
  dots: true,
  arrows: false,
  customPaging: function (slider, i) {
    return i + 1;
  },
  responsive: [{
    breakpoint: 1024,
    settings: {
      // slidesToShow: 3,
    }
  }, {
    breakpoint: 600,
    settings: {
      // slidesToShow: 2,
    }
  }, {
    breakpoint: 300,
    settings: 'uncslick'
  }]
});