function parseGetParams(){var c,g,d,a,h,e,b={},f=function(a){return decodeURIComponent(a).replace(/\+/g," ")},k=window.location.search.substring(1),l=/([^&;=]+)=?([^&;]*)/g;for(h=function(a){"object"!=typeof a&&(g=a,a={length:0},g&&Array.prototype.push.call(a,g));return a};d=l.exec(k);)c=d[1].indexOf("["),e=f(d[2]),0>c?(a=f(d[1]),b[a]?(b[a]=h(b[a]),Array.prototype.push.call(b[a],e)):b[a]=e):(a=f(d[1].slice(0,c)),c=f(d[1].slice(c+1,d[1].indexOf("]",c))),b[a]=h(b[a]),c?b[a][c]=e:Array.prototype.push.call(b[a],e));return b};var getParams=parseGetParams();(function(d,w,c){(w[c]=w[c]||[]).push({formId:105966,host:"formdesigner.ru",formHeight:391,el:"form_105966_1",center:0,fields:{field861861:getParams.gclid||''}});var s=d.createElement("script"),g="getElementsByTagName";s.type="text/javascript";s.charset="UTF-8";s.async=!1;s.src=(d.location.protocol=="https:"?"https:":"http:")+"//formdesigner.ru/js/iform.js";var h=d[g]("head")[0]||d[g]("body")[0];h.appendChild(s)})(document,window,"fdforms");
function parseGetParams(){var c,g,d,a,h,e,b={},f=function(a){return decodeURIComponent(a).replace(/\+/g," ")},k=window.location.search.substring(1),l=/([^&;=]+)=?([^&;]*)/g;for(h=function(a){"object"!=typeof a&&(g=a,a={length:0},g&&Array.prototype.push.call(a,g));return a};d=l.exec(k);)c=d[1].indexOf("["),e=f(d[2]),0>c?(a=f(d[1]),b[a]?(b[a]=h(b[a]),Array.prototype.push.call(b[a],e)):b[a]=e):(a=f(d[1].slice(0,c)),c=f(d[1].slice(c+1,d[1].indexOf("]",c))),b[a]=h(b[a]),c?b[a][c]=e:Array.prototype.push.call(b[a],e));return b};var getParams=parseGetParams();(function(d,w,c){(w[c]=w[c]||[]).push({formId:105966,host:"formdesigner.ru",formHeight:391,el:"form_105966_2",center:0,fields:{field861861:getParams.gclid||''}});var s=d.createElement("script"),g="getElementsByTagName";s.type="text/javascript";s.charset="UTF-8";s.async=!1;s.src=(d.location.protocol=="https:"?"https:":"http:")+"//formdesigner.ru/js/iform.js";var h=d[g]("head")[0]||d[g]("body")[0];h.appendChild(s)})(document,window,"fdforms");
(function () {
  var openButton = document.querySelector('.nav__open');
  var nav = document.querySelector('.nav__list--mobile');
  var navLinks = document.querySelectorAll('.nav__link[href^="#"]');
  
  openButton.addEventListener('click', function () {
    if (nav.classList.contains('nav__list--inactive')) {
      nav.classList.remove('nav__list--inactive');
      nav.classList.add('nav__list--show');
      openButton.classList.add('nav__open--close');
    } else {
      openButton.classList.remove('nav__open--close');
      nav.classList.remove('nav__list--show');
      nav.classList.add('nav__list--inactive');
    }
  });
  
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
      openButton.classList.remove('nav__open--close');
      nav.classList.remove('nav__list--show');
      nav.classList.add('nav__list--inactive');
    });
  };
})();
(function () {
  var openButtons = document.querySelectorAll('.button--programs');
  var overlay = document.querySelector('.popup__overlay');
  var popupTemplate = document.querySelector('.popup__template').content.querySelector('.popup');
  
  for (var g = 0; g < 9; g++) {
    var popup = popupTemplate.cloneNode(true);
    popup.querySelector('.heading--popup').innerHTML = popupData[g].title;
    popup.querySelector('.popup__webp').srcset = popupData[g].imgWebp;
    popup.querySelector('.popup__img').src = popupData[g].img;
    popup.querySelector('.popup__counter').innerHTML = popupData[g].counter;
    popup.querySelector('.popup__text').innerHTML = popupData[g].text;
    popup.querySelector('.popup__list').innerHTML = popupData[g].list;
    popup.querySelector('.popup__attention').innerHTML = popupData[g].attention;
    document.body.appendChild(popup);
  };
  
  var popups = document.querySelectorAll('.popup');
  var closeButtons = document.querySelectorAll('.popup__close');
  var prevButtons = document.querySelectorAll('.popup__button--prev');
  var nextButtons = document.querySelectorAll('.popup__button--next');
  var registerButtons = document.querySelectorAll('.button--register');
  
  var currentPopup;
  var arrayOpenButtons = [];
  
  for (var i = 0; i < openButtons.length; i++){
    arrayOpenButtons.push(openButtons[i]);
    openButtons[i].addEventListener('click', function(e){
       currentPopup = arrayOpenButtons.indexOf(e.target);
       showPopup(currentPopup);
    });
  };
  
  var showPopup = function (currentPopup) {
    overlay.classList.remove('popup__overlay--hide');
    popups[currentPopup].classList.remove('popup--hide');
  };

  for (var p = 0; p < prevButtons.length; p++) {
    prevButtons[p].addEventListener('click', function () {
      popups[currentPopup].classList.add('popup--hide');
      currentPopup--;
      if (currentPopup < 0) {
        currentPopup = 8;
      };
      showPopup(currentPopup);
    });
  };
  
  for (var k = 0; k < nextButtons.length; k++) {
    nextButtons[k].addEventListener('click', function () {
      popups[currentPopup].classList.add('popup--hide');
      currentPopup++;
      if (currentPopup === 9) {
        currentPopup = 0;
      };
      showPopup(currentPopup);
    });
  };
  
  for (var j = 0; j < closeButtons.length; j++) {
    closeButtons[j].addEventListener('click', function () {
      for (var n = 0; n < popups.length; n++) {
        popups[n].classList.add('popup--hide');
      };
      overlay.classList.add('popup__overlay--hide');
    });
  };
  
  overlay.addEventListener('click', function () {
    for (var m = 0; m < popups.length; m++) {
      popups[m].classList.add('popup--hide');
    };
    overlay.classList.add('popup__overlay--hide');
  });
  
  for (var r = 0; r < registerButtons.length; r++) {
    registerButtons[r].addEventListener('click', function () {
      for (var t = 0; t < popups.length; t++) {
        popups[t].classList.add('popup--hide');
        overlay.classList.add('popup__overlay--hide');
      };
    });
  };
})();