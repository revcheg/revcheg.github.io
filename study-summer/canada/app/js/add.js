(function () {
  var add = document.querySelector('.add');
  var overlay = document.querySelector('.popup__overlay');
  var close = document.querySelector('.add__close');
  var link = document.querySelector('.add__link');
  
  window.onload = function () {
    add.classList.add('add--show');
    overlay.classList.remove('popup__overlay--hide');
    // document.body.style.overflow = 'hidden';
  };
  
  close.addEventListener('click', function () {
    add.classList.remove('add--show');
    overlay.classList.add('popup__overlay--hide');
    // document.body.style.overflow = 'auto';
  });
  
  overlay.addEventListener('click', function () {
    add.classList.remove('add--show');
    overlay.classList.add('popup__overlay--hide');
    // document.body.style.overflow = 'auto';
  });
  
  link.addEventListener('click', function () {
    add.classList.remove('add--show');
    overlay.classList.add('popup__overlay--hide');
    // document.body.style.overflow = 'auto';
  });
})();