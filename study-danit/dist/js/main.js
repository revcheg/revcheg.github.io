(function () {
  var container = document.querySelector('.about__collect');
  var buttons = document.querySelectorAll('.about__switch');
  
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      container.classList.toggle('about__content--flipped');
    });
  }
})()