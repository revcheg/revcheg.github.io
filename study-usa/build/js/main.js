(function () {
  let popup = document.querySelector('.ex');
  let close = document.querySelector('.ex__close');

  close.addEventListener('click', closePopup);
  popup.addEventListener('click', closePopup);
  
  function closePopup() {
    popup.classList.add('ex--hide');
  };
})();
(function () {
  function parseGetParams(){var c,g,d,a,h,e,b={},f=function(a){return decodeURIComponent(a).replace(/\+/g," ")},k=window.location.search.substring(1),l=/([^&;=]+)=?([^&;]*)/g;for(h=function(a){"object"!=typeof a&&(g=a,a={length:0},g&&Array.prototype.push.call(a,g));return a};d=l.exec(k);)c=d[1].indexOf("["),e=f(d[2]),0>c?(a=f(d[1]),b[a]?(b[a]=h(b[a]),Array.prototype.push.call(b[a],e)):b[a]=e):(a=f(d[1].slice(0,c)),c=f(d[1].slice(c+1,d[1].indexOf("]",c))),b[a]=h(b[a]),c?b[a][c]=e:Array.prototype.push.call(b[a], e));return b};

                          var getParams = parseGetParams();
  (function (d, w, c) {
      (w[c] = w[c] || []).push({formId:123077,host:"formdesigner.ru",formHeight:391, el: "form_123077_1", center: 0,
      fields: {
                                          field1085571: getParams.gclid || ''
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
                                        (w[c] = w[c] || []).push({formId:123077,host:"formdesigner.ru",formHeight:391, el: "form_123077_2", center: 0,
                                        fields: {
                                                                            field1085571: getParams.gclid || ''
                                                                        }});
                                        var s = d.createElement("script"), g = "getElementsByTagName";
                                    	s.type = "text/javascript"; s.charset="UTF-8"; s.async = false;
                                    	s.src = (d.location.protocol == "https:" ? "https:" : "http:")+"//formdesigner.ru/js/iform.js";
                                    	var h=d[g]("head")[0] || d[g]("body")[0];
                                    	h.appendChild(s);
                                    })(document, window, "fdforms");
})();
(function () {
  var nav = document.querySelector('.nav__list');
  var button = document.querySelector('.nav__menu');
  var links = document.querySelectorAll('.nav__link');
  var box = document.querySelector('.intro__box');
  
  button.addEventListener('click', function () {
    if (nav.classList.contains('nav__list--hide')) {
      nav.classList.remove('nav__list--hide');
      button.classList.add('nav__menu--close');
    } else {
      box.style.zIndex = '0';
      nav.classList.add('nav__list--hide');
      button.classList.remove('nav__menu--close');
    }
  });
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      nav.classList.add('nav__list--hide');
      button.classList.remove('nav__menu--close');
    });
  }
})();