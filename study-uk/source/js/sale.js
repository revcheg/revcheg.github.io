(function () {
  let sale = document.querySelector('.sale');
  let button = document.querySelector('.sale__button');

  let flag = localStorage.getItem('new-year-sale');
  if (flag == 'true') {
    sale.classList.add('sale--hide');
  } else {
    sale.classList.remove('sale--hide');
  }

  button.addEventListener('click', function () {
    sale.classList.add('sale--hide');
    localStorage.setItem('new-year-sale', 'true');
  });
})();