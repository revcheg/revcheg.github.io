(function() {
  var main = document.querySelector('.main');
  var closeBtn = document.querySelector('.popup__close');
  var newsLink = document.querySelector('.nav__item--news');
  var popup = document.querySelector('.popup');
  
  newsLink.addEventListener('click', function () {
    main.classList.add('main--blur');
    popup.classList.add('popup--show');
  });
  
  closeBtn.addEventListener('click', function () {
    main.classList.remove('main--blur');
    popup.classList.remove('popup--show');
  });
})();