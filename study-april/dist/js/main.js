(function () {
  function parseGetParams(){var c,g,d,a,h,e,b={},f=function(a){return decodeURIComponent(a).replace(/\+/g," ")},k=window.location.search.substring(1),l=/([^&;=]+)=?([^&;]*)/g;for(h=function(a){"object"!=typeof a&&(g=a,a={length:0},g&&Array.prototype.push.call(a,g));return a};d=l.exec(k);)c=d[1].indexOf("["),e=f(d[2]),0>c?(a=f(d[1]),b[a]?(b[a]=h(b[a]),Array.prototype.push.call(b[a],e)):b[a]=e):(a=f(d[1].slice(0,c)),c=f(d[1].slice(c+1,d[1].indexOf("]",c))),b[a]=h(b[a]),c?b[a][c]=e:Array.prototype.push.call(b[a], e));return b};

                        var getParams = parseGetParams();
(function (d, w, c) {
    (w[c] = w[c] || []).push({formId:109643,host:"formdesigner.ru",formHeight:391, el: "form_109643_1", center: 0,
    fields: {
                                        field901167: getParams.gclid || ''
                                    }});
    var s = d.createElement("script"), g = "getElementsByTagName";
	s.type = "text/javascript"; s.charset="UTF-8"; s.async = false;
	s.src = (d.location.protocol == "https:" ? "https:" : "http:")+"//formdesigner.ru/js/iform.js";
	var h=d[g]("head")[0] || d[g]("body")[0];
	h.appendChild(s);
})(document, window, "fdforms");

  function parseGetParams(){var c,g,d,a,h,e,b={},f=function(a){return decodeURIComponent(a).replace(/\+/g," ")},k=window.location.search.substring(1),l=/([^&;=]+)=?([^&;]*)/g;for(h=function(a){"object"!=typeof a&&(g=a,a={length:0},g&&Array.prototype.push.call(a,g));return a};d=l.exec(k);)c=d[1].indexOf("["),e=f(d[2]),0>c?(a=f(d[1]),b[a]?(b[a]=h(b[a]),Array.prototype.push.call(b[a],e)):b[a]=e):(a=f(d[1].slice(0,c)),c=f(d[1].slice(c+1,d[1].indexOf("]",c))),b[a]=h(b[a]),c?b[a][c]=e:Array.prototype.push.call(b[a], e));return b};

                        var getParams = parseGetParams();
(function (d, w, c) {
    (w[c] = w[c] || []).push({formId:109643,host:"formdesigner.ru",formHeight:391, el: "form_109643_2", center: 0,
    fields: {
                                        field901167: getParams.gclid || ''
                                    }});
    var s = d.createElement("script"), g = "getElementsByTagName";
	s.type = "text/javascript"; s.charset="UTF-8"; s.async = false;
	s.src = (d.location.protocol == "https:" ? "https:" : "http:")+"//formdesigner.ru/js/iform.js";
	var h=d[g]("head")[0] || d[g]("body")[0];
	h.appendChild(s);
})(document, window, "fdforms");
})();
(function () {
  var list = document.querySelector('.members__list');
  var items = document.querySelectorAll('.members__item');
  var descs = document.querySelectorAll('.members__desc');
  var buttons = document.querySelectorAll('.members__button');
  var overlay = document.querySelector('.members__overlay');
  
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () { 
      this.classList.toggle('members__item--show');
    });
  }
  
  for (var b = 0; b < buttons.length; b++) {
    buttons[b].addEventListener('click', function (evt) {
      
      this.classList.toggle('members__button--show');
      
      if (this.classList.contains('members__button--show')) {
        overlay.classList.remove('members__overlay--hide');
      } else {
        this.classList.remove('members__button--show');
        overlay.classList.add('members__overlay--hide');
      }
    });
  }
  
  for (var d = 0; d < descs.length; d++) {
    descs[d].addEventListener('click', function (evt) {
      evt.stopPropagation();
    });
  }
  
  overlay.addEventListener('click', function () {
    for (var o = 0; o < items.length; o++) {
      items[o].classList.remove('members__item--show');
      buttons[o].classList.remove('members__button--show');
      overlay.classList.add('members__overlay--hide');
    }
  });
})();
(function () {
  var button = document.querySelector('.nav__menu');
  var list = document.querySelector('.nav__list');
  var links = document.querySelectorAll('.nav__link');
  
  button.addEventListener('click', function () {
    if (button.classList.contains('nav__menu--active')) {
      button.classList.remove('nav__menu--active');
      list.classList.remove('nav__list--show');
    } else {
      button.classList.add('nav__menu--active');
      list.classList.add('nav__list--show');
    }
  });
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      button.classList.remove('nav__menu--active');
      list.classList.remove('nav__list--show');
    });
  }
})();