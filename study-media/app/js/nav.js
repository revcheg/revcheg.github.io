(function () {
  var openButton = document.querySelector('.nav__open');
  var nav = document.querySelector('.nav__list--mobile');
  
  openButton.addEventListener('click', function () {
    nav.classList.add('nav__list--mobile--show');
  });
})();