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
  var item = document.querySelectorAll('.edge__item');
  
  var widthDevice = document.body.clientWidth;
  var mobile;
  
  if (widthDevice <= 768) {
    mobile = 0;
  } else if (widthDevice >= 769) {
    mobile = 1;
  }
  
  window.addEventListener('scroll', function() {
    var block = document.querySelector('.edge');
    var blockOffset = block.offsetTop;
    var topOffset = window.pageYOffset;
    
    switch (mobile) {
      case 0:
        if (topOffset > blockOffset - 350) {
          showItem();
        }
        break;
      case 1:
        if (topOffset > blockOffset - 300) {
          showItem();
        }
        break;
      default:
        showItem();
    }
  });
  
  function showItem() {
    var counter = 0;
    
    var timer = setInterval(function () {
      item[counter].classList.remove('edge__item--hide');
      counter++;
    }, 150);
    
    setTimeout(function () {
      clearInterval(timer);
    }, 900);
  }
})();
(function () {
  function parseGetParams(){var c,g,d,a,h,e,b={},f=function(a){return decodeURIComponent(a).replace(/\+/g," ")},k=window.location.search.substring(1),l=/([^&;=]+)=?([^&;]*)/g;for(h=function(a){"object"!=typeof a&&(g=a,a={length:0},g&&Array.prototype.push.call(a,g));return a};d=l.exec(k);)c=d[1].indexOf("["),e=f(d[2]),0>c?(a=f(d[1]),b[a]?(b[a]=h(b[a]),Array.prototype.push.call(b[a],e)):b[a]=e):(a=f(d[1].slice(0,c)),c=f(d[1].slice(c+1,d[1].indexOf("]",c))),b[a]=h(b[a]),c?b[a][c]=e:Array.prototype.push.call(b[a], e));return b};

            var getParams = parseGetParams();
(function (d, w, c) {
(w[c] = w[c] || []).push({formId:117546,host:"formdesigner.ru",formHeight:391, el: "form_117546_1", center: 0,
fields: {
                            field1025388: getParams.gclid || ''
                        }});
var s = d.createElement("script"), g = "getElementsByTagName";
s.type = "text/javascript"; s.charset="UTF-8"; s.async = false;
s.src = (d.location.protocol == "https:" ? "https:" : "http:")+"//formdesigner.ru/js/iform.js";
var h=d[g]("head")[0] || d[g]("body")[0];
h.appendChild(s);
})(document, window, "fdforms");
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
(function () {
  var item = document.querySelectorAll('.short__item');
  
  var widthDevice = document.body.clientWidth;
  var mobile;
  
  if (widthDevice <= 768) {
    mobile = 0;
  } else if (widthDevice >= 769) {
    mobile = 1;
  }
  
  window.addEventListener('scroll', function() {
    var block = document.querySelector('.short');
    var blockOffset = block.offsetTop;
    var topOffset = window.pageYOffset;
    
    switch (mobile) {
      case 0:
        if (topOffset > blockOffset + 300) {
          showItem();
        }
        break;
      case 1:
        if (topOffset > blockOffset - 300) {
          showItem();
        }
        break;
      default:
        showItem();
    }
  });
  
  function showItem() {
    var counter = 0;
    
    var timer = setInterval(function () {
      item[counter].classList.remove('short__item--hide');
      counter++;
    }, 150);
    
    setTimeout(function () {
      clearInterval(timer);
    }, 900);
  }
})();
(function () {
  var buttons = document.querySelectorAll('.stage__open');
  var blocks = document.querySelectorAll('.stage__article');
  var close = document.querySelector('.stage__close');
  var overlay = document.querySelector('.stage__overlay');
  var wrapper = document.querySelector('.stage__wrapper');
  var prev = document.querySelector('.stage__button--prev');
  var next = document.querySelector('.stage__button--next');
  var clearArray = [];
  var currentButton = 0;
  
  for (var i = 0; i < buttons.length; i++){
    clearArray.push(buttons[i]);
    buttons[i].addEventListener('click', function(evt){
      currentButton = clearArray.indexOf(evt.currentTarget);
      showContent();
    });
  }
  
  function showContent() {
    if (currentButton < 0) {
      currentButton = 0;
    } else if (currentButton > 4) {
      currentButton = 4;
    }
    
    overlay.classList.add('stage__overlay--show');
    wrapper.classList.add('stage__wrapper--show');
    
    for (var j = 0; j < blocks.length; j++) {
      blocks[j].classList.remove('stage__article--show');
    }
    
    blocks[currentButton].classList.add('stage__article--show');
  }
  
  prev.addEventListener('click', function () {
    currentButton--;
    showContent();  
  });
  
  next.addEventListener('click', function () {
    currentButton++;
    showContent();  
  });
  
  close.addEventListener('click', function () {
    overlay.classList.remove('stage__overlay--show');
    wrapper.classList.remove('stage__wrapper--show');
  });
  
  overlay.addEventListener('click', function () {
    overlay.classList.remove('stage__overlay--show');
    wrapper.classList.remove('stage__wrapper--show');
  });
})();