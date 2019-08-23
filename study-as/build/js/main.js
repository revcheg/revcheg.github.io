(function () {
  var checkbox = document.querySelectorAll('.cost__input');
  var state = false;
  var value;
  
  var cost = document.querySelectorAll('.cost__value');
  
  for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', function () {
      if (this.checked == true) {
        state = true;
        value = 650;
      } else {
        state = false;
        value = -650;
      }
      
      changeState();
      changeCost();
    })
  }
  
  function changeState() {
    for (var j = 0; j < checkbox.length; j++) {
      checkbox[j].checked = state;
    }
  };
  
  function changeCost() {
    for (var m = 0; m < cost.length; m++) {
      var current = cost[m].textContent;
      var integer = parseInt(current, 10);
      integer = integer + value;
      cost[m].innerHTML = integer;
    }
  }
})();
(function () {
  var button = document.querySelector('.nav__menu');
  var menu = document.querySelector('.nav');
  var links = document.querySelectorAll('.nav__link');
  
  button.addEventListener('click', function () {
    button.classList.toggle('nav__menu--show');
    if (button.classList.contains('nav__menu--show')) {
      menu.classList.add('nav--show');
    } else {
      menu.classList.remove('nav--show');
    }
  });
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      button.classList.remove('nav__menu--show');
      menu.classList.remove('nav--show');
    });
  }
})();
(function () {
  var button = document.querySelector('.review__play');
  var video = document.querySelector('.review__iframe');
  
  button.addEventListener('click', function () {
    video.src = 'https://www.youtube.com/embed/4aZyLakyM-4?autoplay=1;';
    this.classList.add('review__play--hide');
  });
})();