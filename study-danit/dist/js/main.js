(function () {
  var buttons = document.querySelectorAll('.about__switch');
  var contents = document.querySelectorAll('.about__content');
  var clearArrayButtons = [];
  
  for (var i = 0; i < buttons.length; i++){
    clearArrayButtons.push(buttons[i]);
    buttons[i].addEventListener('click', function(evt){
      currentButton = clearArrayButtons.indexOf(evt.currentTarget);
      showContent();
      console.log(currentButton);
    });
  }
  
  function showContent() {
    if (currentButton == 1) {
      contents[1].classList.remove('about__content--show');
      contents[0].classList.add('about__content--show');
    } else {
      contents[0].classList.remove('about__content--show');
      contents[1].classList.add('about__content--show');
    }
  }
})();
(function () {
  var buttons = document.querySelectorAll('.danit__button');
  var descs = document.querySelectorAll('.danit__desc');
  
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (evt) {  
      var currentButton = evt.target;
      var desc = currentButton.nextElementSibling;
      
      if (currentButton.classList.contains('danit__button--hide')) {
        for (var j = 0; j < buttons.length; j++) {
          buttons[j].classList.add('danit__button--hide');
          descs[j].classList.add('danit__desc--hide');
        }
        
        currentButton.classList.remove('danit__button--hide');
        desc.classList.remove('danit__desc--hide');
      } else {
        currentButton.classList.add('danit__button--hide');
        desc.classList.add('danit__desc--hide');
      }
    });
  }
})();
(function () {
  var buttons = document.querySelectorAll('.edge__button');
  var contents = document.querySelectorAll('.edge__content');
  var clearArrayButtons = [];
  
  for (var i = 0; i < buttons.length; i++){
    clearArrayButtons.push(buttons[i]);
    buttons[i].addEventListener('click', function(evt){
      currentButton = clearArrayButtons.indexOf(evt.currentTarget);
      showContent();
    });
  }
  
  function showContent() {
    for (var j = 0; j < contents.length; j++) {
      buttons[j].classList.remove('edge__button--active');
      contents[j].classList.remove('edge__content--show');
    }
    
    buttons[currentButton].classList.add('edge__button--active');
    contents[currentButton].classList.add('edge__content--show');
  }
  
  
  window.addEventListener('scroll', function() {
    var block = document.querySelector('.edge');
    var blockOffset = block.offsetTop;
    var topOffset = window.pageYOffset;
    
    if (topOffset > blockOffset - 300) {
      showButtons();
    }
  });
  
  function showButtons() {
    var counter = 0;
    
    var timer = setInterval(function () {
      buttons[counter].classList.remove('edge__button--hide');
      counter++;
    }, 100);
    
    setTimeout(function () {
      clearInterval(timer);
    }, 600);
    
    for (var j = 0; j < contents.length; j++) {
      contents[j].classList.remove('edge__content--hide');
    }
  }
})();
(function () {
  function parseGetParams(){var c,g,d,a,h,e,b={},f=function(a){return decodeURIComponent(a).replace(/\+/g," ")},k=window.location.search.substring(1),l=/([^&;=]+)=?([^&;]*)/g;for(h=function(a){"object"!=typeof a&&(g=a,a={length:0},g&&Array.prototype.push.call(a,g));return a};d=l.exec(k);)c=d[1].indexOf("["),e=f(d[2]),0>c?(a=f(d[1]),b[a]?(b[a]=h(b[a]),Array.prototype.push.call(b[a],e)):b[a]=e):(a=f(d[1].slice(0,c)),c=f(d[1].slice(c+1,d[1].indexOf("]",c))),b[a]=h(b[a]),c?b[a][c]=e:Array.prototype.push.call(b[a], e));return b};

                    var getParams = parseGetParams();
(function (d, w, c) {
(w[c] = w[c] || []).push({formId:117373,host:"formdesigner.ru",formHeight:391, el: "form_117373_1", center: 0,
fields: {
                                    field1023364: getParams.gclid || ''
                                }});
var s = d.createElement("script"), g = "getElementsByTagName";
s.type = "text/javascript"; s.charset="UTF-8"; s.async = false;
s.src = (d.location.protocol == "https:" ? "https:" : "http:")+"//formdesigner.ru/js/iform.js";
var h=d[g]("head")[0] || d[g]("body")[0];
h.appendChild(s);
})(document, window, "fdforms");
})();
(function () {
  var button = document.querySelector('.header__menu');
  var list = document.querySelector('.header__list:last-of-type');
  var links = document.querySelectorAll('.header__anchor');
  
  button.addEventListener('click', function () {
    if (this.classList.contains('header__menu--close')) {
      this.classList.remove('header__menu--close');
      list.classList.remove('header__list--hide');
    } else {
      this.classList.add('header__menu--close');
      list.classList.add('header__list--hide');
    }
  });
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      this.classList.add('header__menu--close');
      list.classList.add('header__list--hide');
    });
  }
})();
(function () {
  var buttons = document.querySelectorAll('.study__button');
  var slider = document.querySelector('.study__subslider');
  var clearArrayButtons = [];
  
  for (var i = 0; i < buttons.length; i++){
    clearArrayButtons.push(buttons[i]);
    buttons[i].addEventListener('click', function(evt){
      currentButton = clearArrayButtons.indexOf(evt.currentTarget);
      showContent();
    });
  }
  
  function showContent() {
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove('study__button--active');
    }
    buttons[currentButton].classList.add('study__button--active');
    
    slider.style.left = '-' + currentButton + '00%';
  }
})();
