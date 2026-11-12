(function () {
  var list = document.querySelector('.members__list');
  var items = document.querySelectorAll('.members__item');
  var descs = document.querySelectorAll('.members__desc');
  var buttons = document.querySelectorAll('.members__button');
  var overlay = document.querySelector('.members__overlay');
  
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () { 
      this.classList.toggle('members__item--show');
    });
  }
  
  for (var b = 0; b < buttons.length; b++) {
    buttons[b].addEventListener('click', function (evt) {
      
      this.classList.toggle('members__button--show');
      
      if (this.classList.contains('members__button--show')) {
        overlay.classList.remove('members__overlay--hide');
      } else {
        this.classList.remove('members__button--show');
        overlay.classList.add('members__overlay--hide');
      }
    });
  }
  
  for (var d = 0; d < descs.length; d++) {
    descs[d].addEventListener('click', function (evt) {
      evt.stopPropagation();
    });
  }
  
  overlay.addEventListener('click', function () {
    for (var o = 0; o < items.length; o++) {
      items[o].classList.remove('members__item--show');
      buttons[o].classList.remove('members__button--show');
      overlay.classList.add('members__overlay--hide');
    }
  });
})();