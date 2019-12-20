(function () {
  let openButtons = document.querySelectorAll('.review__play');
  let popup = document.querySelector('.review__column');
  let iframe = document.querySelector('.review__iframe');
  let overlay = document.querySelector('.overlay');
  let close = document.querySelector('.overlay__close');
  
  var openButtonsArray = [];

  for (let i = 0; i < openButtons.length; i++){
    openButtonsArray.push(openButtons[i]);
    openButtons[i].addEventListener('click', setupPopup);
  }
  
  function setupPopup(evt) {
    let indexButton = openButtonsArray.indexOf(evt.target);
    
    switch (indexButton) {
      case 0:
        iframe.src = 'https://www.youtube.com/embed/AsEZlS0epI4?&autoplay=1'
        break;
      case 1:
        iframe.src = 'https://www.youtube.com/embed/snx6LOb2bno?&autoplay=1'
        break;
      case 2:
        iframe.src = 'https://www.youtube.com/embed/dVKHwTR9Tws?&autoplay=1'
        break;
    }

    popup.classList.remove('review__column--hide');
    overlay.classList.remove('overlay--hide');
  };
  
  close.addEventListener('click', closePopup);
  
  function closePopup() {
    popup.classList.add('review__column--hide');
    overlay.classList.add('overlay--hide');
    iframe.src = '';
  };
})();