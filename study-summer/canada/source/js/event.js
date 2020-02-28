(function () {
  let popup = document.querySelector('.event');
  let close = document.querySelector('.event__close');

  let flag = localStorage.getItem('event-march');
  if (flag == 'true') {
    popup.classList.add('event--hide');
  } else {
    popup.classList.remove('event--hide');
  }

  close.addEventListener('click', function () {
    popup.classList.add('event--hide');
    localStorage.setItem('event-march', 'true');
  });
})();