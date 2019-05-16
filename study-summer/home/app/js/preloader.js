(function () {
  var preloader = document.querySelector('.preloader');
  var logo = document.querySelector('.preloader__logo');

  window.onload = function () {
    preloader.classList.add('preloader--hide');
    logo.classList.add('preloader__logo--hide');
  };
})();