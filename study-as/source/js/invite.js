(function () {
  var popup = document.querySelector('.invite');
  var close = document.querySelector('.invite__close');

  close.addEventListener('click', function () {
    popup.classList.add('invite--hide');
  });
})();