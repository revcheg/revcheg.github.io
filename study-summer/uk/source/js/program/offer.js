(function () {
  var offer = document.querySelector('.offer');
  var close = document.querySelector('.offer__close');

  var flag = localStorage.getItem('close');
  if (flag == 'true') {
    offer.classList.add('offer--hide');
  } else {
    offer.classList.remove('offer--hide');
  }

  close.addEventListener('click', function () {
    offer.classList.add('offer--hide');
    localStorage.setItem('close', true);
  });
})();