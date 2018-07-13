// Form
(function () {
  var modalButton = document.querySelector('.modal__button');
  var modal = document.querySelector('.modal');
  var overlay = document.querySelector('.modal__overlay');
  var close = document.querySelector('.modal__close');
  
  modalButton.addEventListener('click', function () {
    modal.classList.remove('modal--inactive');
    modal.classList.add('modal--active');
    
    overlay.classList.remove('modal__overlay--inactive');
    overlay.classList.add('modal__overlay--active');
  });
  
  close.addEventListener('click', function () {
    modal.classList.remove('modal--active');
    modal.classList.add('modal--inactive');
    
    overlay.classList.remove('modal__overlay--active');
    overlay.classList.add('modal__overlay--inactive');
  });
  
  overlay.addEventListener('click', function () {
    modal.classList.remove('modal--active');
    modal.classList.add('modal--inactive');
    
    overlay.classList.remove('modal__overlay--active');
    overlay.classList.add('modal__overlay--inactive');
  });
  
  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
      modal.classList.remove('modal--active');
      modal.classList.add('modal--inactive');
      
      overlay.classList.remove('modal__overlay--active');
      overlay.classList.add('modal__overlay--inactive');
    }
  });
})();