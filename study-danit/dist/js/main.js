(function () {
  var buttons = document.querySelectorAll('.danit__button');
  
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (evt) {
      var currentButton = evt.target;
      currentButton.classList.toggle('danit__button--hide');
      var desc = currentButton.nextElementSibling;
      desc.classList.toggle('danit__desc--hide');
    });
  }
})();