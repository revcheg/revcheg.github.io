(function () {
  var button = document.querySelector('.title__down');
  var block = document.querySelector('main').firstElementChild.offsetHeight;
  
  button.addEventListener('click', function () {
    window.scrollTo(0, block - 100);
  });
})();