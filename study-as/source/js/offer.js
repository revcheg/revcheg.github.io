(function () {
  let popup = document.querySelector('.offer');
  let close = document.querySelector('.offer__close');
  let anchor = document.querySelector('.offer__button');
  let counter = 0;
  
  counter = localStorage.getItem('counter');
  if (counter >= 3) {
    popup.classList.add('offer--hide');
  } else {
    popup.classList.remove('offer--hide');
  }
  
  close.addEventListener('click', closePopup);
  anchor.addEventListener('click', closePopup);
  
  function closePopup() {
    popup.classList.add('offer--hide');
    counter++;
    localStorage.setItem('counter', counter);
  }
})();