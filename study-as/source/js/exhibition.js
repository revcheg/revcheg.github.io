(function () {
  var popup = document.querySelector('.exhibition');
  var close = document.querySelector('.exhibition__close');
  
  close.addEventListener('click', function () {
    popup.classList.add('exhibition--hide');
  });
})();