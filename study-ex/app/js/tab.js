(function () {
  var buttonSaturday = document.querySelector('.table__button--saturday');
  var buttonWednesday = document.querySelector('.table__button--wednesday');
  
  var tableSaturday = document.querySelector('.table--saturday');
  var tableWednesday = document.querySelector('.table--wednesday');
  
  buttonSaturday.addEventListener('click', function () {
    buttonWednesday.classList.remove('table__button--active');
    buttonSaturday.classList.add('table__button--active');
    tableWednesday.classList.add('table--hide');
    tableSaturday.classList.remove('table--hide');
  });
  
  buttonWednesday.addEventListener('click', function () {
    buttonSaturday.classList.remove('table__button--active');
    buttonWednesday.classList.add('table__button--active');
    tableSaturday.classList.add('table--hide');
    tableWednesday.classList.remove('table--hide');
  });
})();