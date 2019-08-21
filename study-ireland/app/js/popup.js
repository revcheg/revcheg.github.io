(function () {
  var popup = document.querySelector('.popup');
  var button = document.querySelector('.popup__close');
  
  button.addEventListener('click', function () {
    popup.classList.add('popup--hide');
  });
})();