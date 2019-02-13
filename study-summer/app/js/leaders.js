(function () {
  var list = document.querySelector('.leaders__list');
  var prev = document.querySelector('.leaders__button--prev');
  var next = document.querySelector('.leaders__button--next');
  
  prev.addEventListener('click', function () {
    list.style.transform = 'translateX(0%)';
  });
  
  next.addEventListener('click', function () {
    list.style.transform = 'translateX(-50%)';
  });
})();