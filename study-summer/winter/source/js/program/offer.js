(function () {
  var offer = document.querySelector('.offer');
  var close = document.querySelector('.offer__close');

  close.addEventListener('click', function () {
    offer.classList.add('offer--hide');
  });
})();