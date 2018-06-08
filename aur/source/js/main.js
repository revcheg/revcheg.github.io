(function() {
  var main = document.querySelector('.main');
  var closeBtn = document.querySelector('.popup__close');
  var newsLink = document.querySelector('.nav__item--news');
  var popup = document.querySelector('.popup');
  
  newsLink.addEventListener('click', function () {
    main.style.filter = 'blur(5px)';
    popup.style.clip = 'auto';
    popup.style.opacity = '1';
  });
  
  closeBtn.addEventListener('click', function () {
    main.style.filter = 'blur(0px)';
    popup.style.clip = 'rect(0, 0, 0, 0)';
    popup.style.opacity = '0';
  });
})();