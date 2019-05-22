(function () {
  var open = document.querySelector('.contacts__cta');
  var form = document.querySelector('.contacts__subcolumn--popup');
  var overlay = document.querySelector('.contacts__overlay--hide');
  var close = document.querySelector('.contacts__close');

  open.addEventListener('click', function () {
    form.classList.remove('contacts__subcolumn--hide');
    overlay.classList.remove('contacts__overlay--hide');
  });
  
  close.addEventListener('click', function () {
    form.classList.add('contacts__subcolumn--hide');
    overlay.classList.add('contacts__overlay--hide');
  });
  
  overlay.addEventListener('click', function () {
    form.classList.add('contacts__subcolumn--hide');
    overlay.classList.add('contacts__overlay--hide');
  });
  
  form.addEventListener('submit', function () {
    form.classList.add('contacts__subcolumn--hide');
    overlay.classList.add('contacts__overlay--hide');
  });
})();