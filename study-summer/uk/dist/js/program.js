(function () {
  
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
      document.body.style.overflow = 'hidden';
    } else {
      nav.classList.remove('nav__list--show');
      button.classList.remove('nav__menu--close');
      button.classList.add('nav__menu--open');
      document.body.style.overflow = 'auto';
    }
  });
  
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      nav.classList.remove('nav__list--show');
      button.classList.remove('nav__menu--close');
      button.classList.add('nav__menu--open');
      document.body.style.overflow = 'auto';
    });
  }
})();
(function () {
  var tabButtons = document.querySelectorAll('.info__button');
  var tabSections = document.querySelectorAll('.info__tab');
  var tempArray = [];
  var index = 0;
  
  activateTab(index);
  setGallery();
  
  for (var i = 0; i < tabButtons.length; i++){
    tempArray.push(tabButtons[i]);
    tabButtons[i].addEventListener('click', function(evt){
      index = tempArray.indexOf(evt.currentTarget);
      activateTab();
      setGallery();
      resetPhoto();
    });
  }
  
  function activateTab () {
    for (var j = 0; j < tabSections.length; j++) {
      tabSections[j].classList.remove('info__tab--active');
      tabButtons[j].classList.remove('info__button--active');
    }
    
    tabSections[index].classList.add('info__tab--active');
    tabButtons[index].classList.add('info__button--active');
  };
  
  function setGallery () {
    var galleryList = tabSections[index].querySelector('.info__gallery');
    var galleryPrev = tabSections[index].querySelector('.info__swipe--prev');
    var galleryNext = tabSections[index].querySelector('.info__swipe--next');
    var numberOfPhoto = tabSections[index].querySelectorAll('.info__gallery li');
    var counter = 0;
    
    galleryNext.addEventListener('click', function () {
      if (counter >= numberOfPhoto.length - 2) {
        counter = numberOfPhoto.length - 2;
      }
      counter++;
      galleryList.style.left = '-' + counter + '00%';
    });
    
    galleryPrev.addEventListener('click', function () {
      counter--;
      if (counter <= 0) {
        counter = 0;
      }
      galleryList.style.left = '-' + counter + '00%';
    });
  };
  
  function resetPhoto () {
    var galleryList = document.querySelectorAll('.info__gallery');
    for (var g = 0; g < galleryList.length; g++) {
      galleryList[g].style.left = '0%';
    }
  };
})();
(function () {
  var button = document.querySelector('.intro__play');
  var column = document.querySelector('.intro__column');
  var video = document.querySelector('.intro__video');
  
  button.addEventListener('click', function () {
    this.style.display = 'none';
    column.style.width = '100%';
    video.src = 'https://www.youtube.com/embed/LpO92XC8050?&autoplay=1';
  });
})();