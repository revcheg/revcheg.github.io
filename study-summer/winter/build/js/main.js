(function () {
//   $('#filter').submit(function (e) {
//     e.preventDefault();
//     $.ajax({
//       url: "https://holidays.study.ua/trips/filter/",
//       type: "POST",
//       data: new FormData(this),
//       processData: false,
//       contentType: false
//     }).done(function (data) {
//       $(".loop").html(data);
//     });
//   });
// 
//   $(document).on("click", ".pagination", function (e) {
//     e.preventDefault();
//     var btn = $(this);
//     var next = btn.data('next');
// 
//     form = new FormData($('#filter')[0]);
//     btn.css('display', 'none');
//     btn.data('next', next + 1)
// 
//     $.ajax({
//       url: "https://holidays.study.ua/trips/filter/page-"+next+"/",
//       type: "POST",
//       data: form,
//       processData: false,
//       contentType: false
//     }).done(function (data) {
//       $(".loop").append(data);
//     });
// });
// 
// 
// 

	
	$(document).ready(function(){
		 $('#filter').submit();
	});
		
    $('#filter').submit(function (e) {
        e.preventDefault();
		$.ajax({
			url: "https://holidays.study.ua/trips/filter/",
			type: "POST",
			data: new FormData(this),
			processData: false,
			contentType: false
		}).done(function (data) {
			$(".loop").html(data);
		});
    });
	
	
	$(document).on("click", ".pagination", function (e) {
		e.preventDefault();
		var btn = $(this);
		var next = btn.data('next') + 1;
		console.log(next);
		
		form = new FormData($('#filter')[0]);
		btn.remove();
		
		$.ajax({
			url: "https://holidays.study.ua/trips/filter/page-"+next+"/",
			type: "POST",
			data: form,
			processData: false,
			contentType: false
		}).done(function (data) {
			$(".loop").append(data);
		});
	});
})();
(function () {
  var phone = document.querySelector('.request__input[type=tel]');
  
  phone.addEventListener('focus', function() {
    if (phone.value == '') {
      phone.value = '+380';
    } 
    var label = this.nextElementSibling;
    label.classList.add('request__label--active');
  });
  
  phone.addEventListener('input', function() {
    var currentValue = phone.value;
    var regExp = /[^\d+]/;
    if (regExp.test(currentValue)) {
      currentValue = currentValue.replace(regExp, '');
      phone.value = currentValue;
    }
  });
  
  phone.addEventListener('blur', function () {
    if (phone.value == '+380') {
      phone.value = '';
      var label = this.nextElementSibling;
      label.classList.remove('request__label--active');
    }
  });
  
  var inputs = document.querySelectorAll('.request__input');
  
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
      if (this.checkValidity()) {
        this.classList.remove('request__input--invalid');
        this.classList.add('request__input--valid');
      } else {
        this.classList.add('request__input--invalid');
        this.classList.remove('request__input--valid');
      }
      
      var label = this.nextElementSibling;
      var inputValue = this.value;
      if (inputValue == '') {
        label.classList.remove('request__label--active');
        this.classList.remove('request__input--invalid');
      } else {
        label.classList.add('request__label--active');
      }
    });
  }
  
  var form = document.querySelector('.request__form');
  var sorry = document.querySelector('.sorry');
  var close = document.querySelector('.sorry__close');
  var overlay = document.querySelector('.popup__overlay');
  
  form.addEventListener('submit', function (evt) {    
    var email = form.querySelector('#email').value;
    
    if (email == localStorage.getItem('email')) {
      evt.preventDefault();
      sorry.classList.remove('sorry--hide');
      overlay.classList.remove('popup__overlay--hide');
    }
    
    localStorage.setItem('email', email);
  });
  
  overlay.addEventListener('click', function () {
    sorry.classList.add('sorry--hide');
    overlay.classList.add('popup__overlay--hide');
  });
  
  close.addEventListener('click', function () {
    sorry.classList.add('sorry--hide');
    overlay.classList.add('popup__overlay--hide');
  });
  
  document.body.addEventListener('keydown', function (evt) {
    if (evt.keyCode == 27) {
      sorry.classList.add('sorry--hide');
      overlay.classList.add('popup__overlay--hide');
    }
  });
})();
(function () {
  var button = document.querySelector('.nav__menu');
  var nav = document.querySelector('.nav__list');
  var links = document.querySelectorAll('.nav__link');

  button.addEventListener('click', function () {
    if (button.classList.contains('nav__menu--open')) {
      nav.classList.add('nav__list--show');
      button.classList.remove('nav__menu--open');
      button.classList.add('nav__menu--close');
    } else {
      nav.classList.remove('nav__list--show');
      button.classList.remove('nav__menu--close');
      button.classList.add('nav__menu--open');
    }
  });
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      nav.classList.remove('nav__list--show');
      button.classList.remove('nav__menu--close');
      button.classList.add('nav__menu--open');
    });
  }
})();
(function () {
  var items = document.querySelectorAll('.photo__item');
  var webp = document.querySelectorAll('.photo__webp');
  var jpg = document.querySelectorAll('.photo__jpg');
  var popup = document.querySelector('.popup');
  var popupImage = document.querySelector('.popup__jpg');
  var prev = document.querySelector('.popup__control--prev');
  var next = document.querySelector('.popup__control--next');
  var overlay = document.querySelector('.popup__overlay');  
  var currentPhoto = 0;

  var index = [];
  for (var i = 0; i < items.length; i++){
    index.push(items[i]);
    items[i].addEventListener('click', function(evt){
      currentPhoto = index.indexOf(evt.currentTarget);
      showPopup(currentPhoto);
    });
  }
  
  var showPopup = function () {
    if (currentPhoto < 0) {
      currentPhoto = 11;
    } else if (currentPhoto > 11) {
      currentPhoto = 0;
    }
    
    var webpSource = webp[currentPhoto].srcset;
    var jpgSource = jpg[currentPhoto].src;
    
    if (document.body.clientWidth > 768) {
      webpSource = webp[currentPhoto].srcset.replace('-mobile', '');
      jpgSource = jpg[currentPhoto].src.replace('-mobile', '');
    }
    
    popup.querySelector('.popup__webp').srcset = webpSource;
    popup.querySelector('.popup__jpg').src = jpgSource;
    popup.classList.remove('popup--hide');
    overlay.classList.remove('popup__overlay--hide');
  };

  prev.addEventListener('click', function () {
    currentPhoto--;
    showPopup(currentPhoto);
  });
  
  next.addEventListener('click', function () {
    currentPhoto++;
    showPopup(currentPhoto);
  }); 
  
  document.body.addEventListener('keydown', function (evt) {
    if (evt.keyCode == 27) {
      popup.classList.add('popup--hide');
      overlay.classList.add('popup__overlay--hide');
    }
  });
  
  // Свап превьюх в мобильной версии
  var previewList = document.querySelector('.photo__slider');
  var mobilePrev = document.querySelector('.photo__button--prev');
  var mobileNext = document.querySelector('.photo__button--next');
  var currentPosition = 0;
  
  var previewSwap = function () {
    if (currentPosition > 11) {
      currentPosition = 0;
    } else if (currentPosition < 0) {
      currentPosition = 11;
    }
    
    previewList.style.left = '-' + currentPosition * 100 + '%';
  };
  
  mobileNext.addEventListener('click', function () {
    currentPosition++;
    previewSwap(currentPosition);
  });
  
  mobilePrev.addEventListener('click', function () {
    currentPosition--;
    previewSwap(currentPosition);
  });
  
  // Тогглы для тач устройств
  var clientWidth = document.body.clientWidth;
  
  popupImage.addEventListener('touchstart', function (evt) {
    pozXStart = evt.changedTouches[0].pageX;
  });
  
  popupImage.addEventListener('touchmove', function (evt) {
    if (pozXStart > clientWidth / 2) {
      popup.style.left = '40%';
    } else {
      popup.style.left = '60%';
    }
  });
  
  popupImage.addEventListener('touchend', function (evt) {
    popup.style.left = '50%';
    pozXEnd = evt.changedTouches[0].pageX;
    
    if (pozXStart > clientWidth / 2) {
      currentPhoto++;
    } else {
      currentPhoto--;
    }
    showPopup(currentPhoto);
    currentPosition = currentPhoto;
    previewSwap(currentPosition);
  });
  
  overlay.addEventListener('click', function () {
    popup.classList.add('popup--hide');
    overlay.classList.add('popup__overlay--hide');
  });
})();
var programsData = [
  {
    full: true,
    place: 0,
    href: 'https://holidays.study.ua/winter/program/london-winter-holidays-14.html',
    webp: 'img/program-1.webp',
    jpg: 'img/program-1.jpg',
    alt: 'London Winter Holidays',
    name: 'London Winter Holidays',
    location: 'Лондон',
    age: '12-17',
    date: '<a href="https://holidays.study.ua/winter/program/london-winter-holidays-14.html" taget="_blank">04.01 - 18.01 (2 нед.)</a>',
    cost: '$3500 (2 нед.)'
  },
  {
    full: false,
    place: 0,
    href: 'https://holidays.study.ua/winter/program/toronto-academic-holidays.html',
    webp: 'img/program-2.webp',
    jpg: 'img/program-2.jpg',
    alt: 'Toronto Academic Holidays',
    name: 'Toronto Academic Holidays',
    location: 'Торонто',
    age: '12-17',
    date: '<a href="https://holidays.study.ua/winter/program/toronto-academic-holidays.html">04.01 - 18.01 (2 нед.)</a>',
    cost: '$4150 (2 нед.)'
  },
  {
    full: false,
    place: 0,
    href: 'https://holidays.study.ua/winter/program/canadian-high-school.html',
    webp: 'img/program-3.webp',
    jpg: 'img/program-3.jpg',
    alt: 'Canadian High School',
    name: 'Canadian High School',
    location: 'Гамильтон',
    age: '12-17',
    date: '<a href="https://holidays.study.ua/winter/program/canadian-high-school.html">04.01 - 18.01 (2 нед.)</a>',
    cost: '$4350 (2 нед.)'
  },
  {
    full: false,
    place: 0,
    href: 'https://holidays.study.ua/winter/program/explore-toronto.html',
    webp: 'img/program-4.webp',
    jpg: 'img/program-4.jpg',
    alt: 'Explore Toronto',
    name: 'Explore Toronto',
    location: 'Торонто',
    age: '14-17',
    date: '<a href="https://holidays.study.ua/winter/program/explore-toronto.html">04.01 - 18.01 (2 нед.)</a>',
    cost: '$3900 (2 нед.)'
  },
  {
    full: true,
    place: 0,
    href: 'https://holidays.study.ua/winter/program/discover-california.html',
    webp: 'img/program-5.webp',
    jpg: 'img/program-5.jpg',
    alt: 'Discover California',
    name: 'Discover California',
    location: 'Лос-Анджелес',
    age: '13-17',
    date: '<a href="https://holidays.study.ua/winter/program/discover-california.html">04.01 - 18.01 (2 нед.)</a>',
    cost: '$5150 (2 нед.)'
  }
];
(function () {
  var listButton = document.querySelector('.programs__button--list');
  var tileButton = document.querySelector('.programs__button--tile');
  var list = document.querySelector('.filter__result');

  listButton.addEventListener('click', function () {
    list.classList.add('filter__result--column');
    // var item = document.querySelectorAll('.filter__result a');
    listButton.classList.add('programs__button--active');
    tileButton.classList.remove('programs__button--active');

    // for (var i = 0; i < item.length; i++) {
    //   item[i].classList.add('filter__result--column');
    // }
  });

  tileButton.addEventListener('click', function () {
    list.classList.remove('filter__result--column');
    // var item = document.querySelectorAll('.programs__item');
    tileButton.classList.add('programs__button--active');
    listButton.classList.remove('programs__button--active');

    // for (var i = 0; i < item.length; i++) {
    //   item[i].classList.remove('programs__item--column');
    // }
  });
})();
(function () {
  var list = document.querySelector('.programs__list');
  var load = document.querySelector('.programs__load');
  var listButton = document.querySelector('.programs__button--list');
  var programsTemplate = document.querySelector('.programs__template').content;
  
  if (document.body.clientWidth <= 768) {
    programsCounter = 5;
    programsIncrement = 5;
  } else if (document.body.clientWidth > 768) {
    programsCounter = 5;
    programsIncrement = 5;
  }
  
  // renderPrograms(); OPEN!!!!
  
  // load.addEventListener('click', function () {
  //   programsCounter = programsCounter + programsIncrement;
  //   clearPrograms();
  //   renderPrograms();
  // });
  
  function clearPrograms() {
    var item = document.querySelectorAll('.programs__item');
    for (var j = 0; j < item.length; j++) {
      item[j].remove();
    }
  };
  
  function renderPrograms() {
    var programsLength = programsData.slice(0, programsCounter).length;
    
    for (var i = 0; i < programsLength; i++) {
      var item = document.createElement('li');
      item.classList.add('programs__item');
      
      if (listButton.classList.contains('programs__button--active')) {
        item.classList.add('programs__item--column');
      } 
      
      var content = programsTemplate.cloneNode(true);
      if (programsData[i].full) {
        content.querySelector('.programs__full').style.display = 'block';
      }
      
      if (programsData[i].place) {
        content.querySelector('.programs__full').style.display = 'block';
        content.querySelector('.programs__full').innerHTML = 'Осталось ' + programsData[i].place + ' места';
      }
      
      content.querySelector('.programs__link').href = programsData[i].href;
      content.querySelector('source').srcset = programsData[i].webp;
      content.querySelector('img').src = programsData[i].jpg;
      content.querySelector('img').alt = programsData[i].alt;
      content.querySelector('.programs__name').innerHTML = programsData[i].name;
      content.querySelector('.programs__location').innerHTML = programsData[i].location;
      content.querySelector('.programs__age').innerHTML = programsData[i].age + ' лет';
      content.querySelector('.programs__date').innerHTML = programsData[i].date;
      content.querySelector('.programs__cost').innerHTML = programsData[i].cost;
      item.appendChild(content);
      list.appendChild(item);
    }
    
    // if (programsCounter >= programsData.length) {
    //   load.disabled = true;
    // }
  };
})();
(function () {
  var openButtons = document.querySelectorAll('.reviews__open');
  var videoWrapper = document.querySelector('.reviews__container');
  var video = document.querySelector('.reviews__iframe');
  var overlay = document.querySelector('.popup__overlay');
  
  var openButtonsArray = [];

  for (var i = 0; i < openButtons.length; i++){
    openButtonsArray.push(openButtons[i]);
    openButtons[i].addEventListener('click', function(evt){
      var indexButton = openButtonsArray.indexOf(evt.target);
      videoWrapper.classList.remove('reviews__container--hide');
      overlay.classList.remove('popup__overlay--hide');
      if (indexButton == 0) {
        video.src = 'https://www.youtube.com/embed/AsEZlS0epI4?&autoplay=1';
      } else if (indexButton == 1) {
        video.src = 'https://www.youtube.com/embed/snx6LOb2bno?&autoplay=1';
      } else {
        video.src = 'https://www.youtube.com/embed/dVKHwTR9Tws?&autoplay=1';
      }
    });
  }
  
  overlay.addEventListener('click', function () {
    videoWrapper.classList.add('reviews__container--hide');
    video.src = '';
    overlay.classList.add('popup__overlay--hide');
  });
})();
(function () {
  var slides = document.querySelectorAll('.slider__item');
  var prev = document.querySelector('.slider__control--prev');
  var next = document.querySelector('.slider__control--next');
  var dots = document.querySelectorAll('.slider__dot');
  
  var currentSlide = 0;
  
  // Отрисовка слайдов
  var showSlide = function () {
    if (currentSlide > 2) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = 2;
    };
    slides[currentSlide].classList.add('slider__item--show');
    dots[currentSlide].classList.add('slider__dot--active');
  };
  
  // Тогглы назад/вперед
  next.addEventListener('click', function () {
    slides[currentSlide].classList.remove('slider__item--show');
    dots[currentSlide].classList.remove('slider__dot--active');
    currentSlide++;
    showSlide(currentSlide);
  });
  
  prev.addEventListener('click', function () {
    slides[currentSlide].classList.remove('slider__item--show');
    dots[currentSlide].classList.remove('slider__dot--active');
    currentSlide--;
    showSlide(currentSlide);
  });
  
  // Тогглы, точки
  var dotsArray = [];
  for (var i = 0; i < dots.length; i++){
    dotsArray.push(dots[i]);
    dots[i].addEventListener('click', function(e){
       slides[currentSlide].classList.remove('slider__item--show');
       dots[currentSlide].classList.remove('slider__dot--active');
       currentSlide = dotsArray.indexOf(e.target);
       showSlide(currentSlide);
    });
  };
  
  // Таймер
  var slideInterval = setInterval(function () {
    slides[currentSlide].classList.remove('slider__item--show');
    dots[currentSlide].classList.remove('slider__dot--active');
    currentSlide++;
    showSlide(currentSlide);
  }, 4000);
  
  // Тач для телефонов
  // var clientWidth = document.body.clientWidth;
  // 
  // for (var j = 0; j < slides.length; j++) {
  //   slides[j].addEventListener('touchstart', function (evt) {
  //     pozXStart = evt.changedTouches[0].pageX;
  //   });
  // 
  //   slides[j].addEventListener('touchend', function (evt) {
  //     pozXEnd = evt.changedTouches[0].pageX;
  // 
  //     if (pozXStart > clientWidth / 2) {
  //       slides[currentSlide].classList.remove('slider__item--show');
  //       dots[currentSlide].classList.remove('slider__dot--active');
  //       currentSlide++;
  //     } else {
  //       slides[currentSlide].classList.remove('slider__item--show');
  //       dots[currentSlide].classList.remove('slider__dot--active');
  //       currentSlide--;
  //     }
  // 
  //     showSlide(currentSlide);
  //   });
  // }
})();
(function () {
  var video = document.querySelector('.about__iframe');
  var button = document.querySelector('.about__play');
   
  button.addEventListener('click', function () {
    button.classList.add('about__play--hide');
    video.src = 'https://www.youtube.com/embed/Npl8YrYihXw?&autoplay=1';
  });
})();