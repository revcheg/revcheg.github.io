(function () {
  var list = document.querySelector('.members__list');
  var items = document.querySelectorAll('.members__item');
  var descs = document.querySelectorAll('.members__desc');
  var buttons = document.querySelectorAll('.members__button');
  
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () { 
      this.classList.toggle('members__item--show');
    });
  }
  
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      this.classList.toggle('members__button--show');
      
      if (this.classList.contains('members__button--show')) {
        
      } else {
        this.classList.remove('members__button--show');
      }
    });
  }
})();