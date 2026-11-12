(function () {
  window.onscroll = function () {
    var header = document.querySelector('.header');
    
    if (window.pageYOffset > 1) {
      header.classList.add('header--scroll');
    } else {
      header.classList.remove('header--scroll');
    }
  };  
})();