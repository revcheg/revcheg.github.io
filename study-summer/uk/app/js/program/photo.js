(function () {
  var photo = document.querySelector('.photo__source--big');
  
  photo.addEventListener('click', function () {
    this.classList.toggle('photo__source--open');
  });
})();