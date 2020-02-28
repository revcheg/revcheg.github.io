(function () {
  let popup = document.querySelector('.ex');
  let close = document.querySelector('.ex__close');

  close.addEventListener('click', closePopup);
  popup.addEventListener('click', closePopup);
  
  function closePopup() {
    popup.classList.add('ex--hide');
  };
})();