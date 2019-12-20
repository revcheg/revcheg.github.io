(function () {
  var wd = document.body.clientWidth;
  console.log(wd);
  
  if (wd <= 768) {
    $('.program__list').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow:"<img class='a-left control-c prev slick-prev' src='img/arrow-blue.svg'>",
      nextArrow:"<img class='a-right control-c next slick-next' src='img/arrow-blue-r.svg'>"
    });
  }
})();