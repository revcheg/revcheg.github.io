(function () {
  var listButton = document.querySelector('.programs__button--list');
  var tileButton = document.querySelector('.programs__button--tile');
  var list = document.querySelector('.filter__result');

  listButton.addEventListener('click', function () {
    list.classList.add('filter__result--column');
    // var item = document.querySelectorAll('.filter__result a');
    listButton.classList.add('programs__button--active');
    tileButton.classList.remove('programs__button--active');

    // for (var i = 0; i < item.length; i++) {
    //   item[i].classList.add('filter__result--column');
    // }
  });

  tileButton.addEventListener('click', function () {
    list.classList.remove('filter__result--column');
    // var item = document.querySelectorAll('.programs__item');
    tileButton.classList.add('programs__button--active');
    listButton.classList.remove('programs__button--active');

    // for (var i = 0; i < item.length; i++) {
    //   item[i].classList.remove('programs__item--column');
    // }
  });
})();