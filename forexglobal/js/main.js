// Header
window.onscroll = function () {

 var html = document.documentElement;
 var body = document.body;
 var header = document.querySelector('.header');
 
 if (html.scrollTop > 1 || body.scrollTop > 1) {
   header.classList.add('header--scroll');
   
 } else {
   header.classList.remove('header--scroll');
 }
};

// Open Accounts
var openAccount = document.querySelector('.header__open');
var listAccount = document.querySelector('.header__accounts');

openAccount.addEventListener('click', function (event) {
  event.preventDefault();
  
  if (listAccount.classList.contains('header__accounts--closed')) {
    openAccount.classList.add('header__open--active');
    listAccount.classList.remove('header__accounts--closed');
    listAccount.classList.add('header__accounts--opened');
  } else {
    openAccount.classList.remove('header__open--active');
    listAccount.classList.remove('header__accounts--opened');
    listAccount.classList.add('header__accounts--closed');
  }
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    openAccount.classList.remove('header__open--active');
    listAccount.classList.remove('header__accounts--opened');
    listAccount.classList.add('header__accounts--closed');
    
    navWrappers[0].classList.remove('nav__wrapper--opened');
    navWrappers[0].classList.add('nav__wrapper--closed');
    navWrappers[1].classList.remove('nav__wrapper--opened');
    navWrappers[1].classList.add('nav__wrapper--closed');
    navWrappers[2].classList.remove('nav__wrapper--opened');
    navWrappers[2].classList.add('nav__wrapper--closed');
    navWrappers[3].classList.remove('nav__wrapper--opened');
    navWrappers[3].classList.add('nav__wrapper--closed');
    
    navLinks[0].classList.remove('nav__link--active');
    navLinks[1].classList.remove('nav__link--active');
    navLinks[2].classList.remove('nav__link--active');
    navLinks[3].classList.remove('nav__link--active');
    
    header.classList.remove('header--menu');
  }
});

// Open Menu
var navLinks = document.querySelectorAll('.nav__link');
var navWrappers = document.querySelectorAll('.nav__wrapper');
var header = document.querySelector('.header');

function about () {
  if (navWrappers[0].classList.contains('nav__wrapper--closed')) {
    navWrappers[0].classList.remove('nav__wrapper--closed');
    navWrappers[0].classList.add('nav__wrapper--opened');
    navWrappers[1].classList.remove('nav__wrapper--opened');
    navWrappers[1].classList.add('nav__wrapper--closed');
    navWrappers[2].classList.remove('nav__wrapper--opened');
    navWrappers[2].classList.add('nav__wrapper--closed');
    navWrappers[3].classList.remove('nav__wrapper--opened');
    navWrappers[3].classList.add('nav__wrapper--closed');
    
    navLinks[0].classList.add('nav__link--active');
    navLinks[1].classList.remove('nav__link--active');
    navLinks[2].classList.remove('nav__link--active');
    navLinks[3].classList.remove('nav__link--active');
    
    header.classList.add('header--menu');
  } else {
    navWrappers[0].classList.remove('nav__wrapper--opened');
    navWrappers[0].classList.add('nav__wrapper--closed');
    
    navLinks[0].classList.remove('nav__link--active');
    
    header.classList.remove('header--menu');
  }
};

function trading () {
  if (navWrappers[1].classList.contains('nav__wrapper--closed')) {
    navWrappers[1].classList.remove('nav__wrapper--closed');
    navWrappers[1].classList.add('nav__wrapper--opened');
    navWrappers[0].classList.remove('nav__wrapper--opened');
    navWrappers[0].classList.add('nav__wrapper--closed');
    navWrappers[2].classList.remove('nav__wrapper--opened');
    navWrappers[2].classList.add('nav__wrapper--closed');
    navWrappers[3].classList.remove('nav__wrapper--opened');
    navWrappers[3].classList.add('nav__wrapper--closed');
    
    navLinks[1].classList.add('nav__link--active');
    navLinks[0].classList.remove('nav__link--active');
    navLinks[2].classList.remove('nav__link--active');
    navLinks[3].classList.remove('nav__link--active');
    
    header.classList.add('header--menu');
  } else {
    navWrappers[1].classList.remove('nav__wrapper--opened');
    navWrappers[1].classList.add('nav__wrapper--closed');
    
    navLinks[1].classList.remove('nav__link--active');
    
    header.classList.remove('header--menu');
  }
};

function resources () {
  if (navWrappers[2].classList.contains('nav__wrapper--closed')) {
    navWrappers[2].classList.remove('nav__wrapper--closed');
    navWrappers[2].classList.add('nav__wrapper--opened');
    navWrappers[0].classList.remove('nav__wrapper--opened');
    navWrappers[0].classList.add('nav__wrapper--closed');
    navWrappers[1].classList.remove('nav__wrapper--opened');
    navWrappers[1].classList.add('nav__wrapper--closed');
    navWrappers[3].classList.remove('nav__wrapper--opened');
    navWrappers[3].classList.add('nav__wrapper--closed');
    
    navLinks[2].classList.add('nav__link--active');
    navLinks[0].classList.remove('nav__link--active');
    navLinks[1].classList.remove('nav__link--active');
    navLinks[3].classList.remove('nav__link--active');
    
    header.classList.add('header--menu');
  } else {
    navWrappers[2].classList.remove('nav__wrapper--opened');
    navWrappers[2].classList.add('nav__wrapper--closed');
    
    navLinks[2].classList.remove('nav__link--active');
    
    header.classList.remove('header--menu');
  }
};

function contact () {
  if (navWrappers[3].classList.contains('nav__wrapper--closed')) {
    navWrappers[3].classList.remove('nav__wrapper--closed');
    navWrappers[3].classList.add('nav__wrapper--opened');
    navWrappers[1].classList.remove('nav__wrapper--opened');
    navWrappers[1].classList.add('nav__wrapper--closed');
    navWrappers[2].classList.remove('nav__wrapper--opened');
    navWrappers[2].classList.add('nav__wrapper--closed');
    navWrappers[0].classList.remove('nav__wrapper--opened');
    navWrappers[0].classList.add('nav__wrapper--closed');
    
    navLinks[3].classList.add('nav__link--active');
    navLinks[0].classList.remove('nav__link--active');
    navLinks[1].classList.remove('nav__link--active');
    navLinks[2].classList.remove('nav__link--active');
    
    header.classList.add('header--menu');
  } else {
    navWrappers[3].classList.remove('nav__wrapper--opened');
    navWrappers[3].classList.add('nav__wrapper--closed');
    
    navLinks[3].classList.remove('nav__link--active');
    
    header.classList.remove('header--menu');
  }
};

// Mobile Menu
var menuToggle = document.querySelector('.header__toggle');
var menuUser = document.querySelector('.header__user');
var menu = document.querySelector('.nav');

menuToggle.addEventListener('click', function () {
  if (menuUser.classList.contains('header__user--closed')) {
    menuUser.classList.remove('header__user--closed');
    menuUser.classList.add('header__user--opened');
    menu.classList.remove('nav--closed');
    menu.classList.add('nav--opened');
  } else {
    menuUser.classList.remove('header__user--opened');
    menuUser.classList.add('header__user--closed');
    menu.classList.remove('nav--opened');
    menu.classList.add('nav--closed');
  }
}); 

// Tabs
// Index Tab Platforms
function openTabs (evt, cityName) {

  var i, tabsWrapper, tabsButton;

  tabsWrapper = document.getElementsByClassName('tabs__wrapper');

  for (i = 0; i < tabsWrapper.length; i++) {
    tabsWrapper[i].style.top = '-200px';
    tabsWrapper[i].style.opacity = '0';
  }

  tabsButton = document.getElementsByClassName('tabs__button');

  for (i = 0; i < tabsButton.length; i++) {
    tabsButton[i].className = tabsButton[i].className.replace(' tabs__active', '');
  }

  document.getElementById(cityName).style.top = '70px';
  document.getElementById(cityName).style.opacity = '1';
  evt.currentTarget.className += ' tabs__active';
}

// Inner Tabs
function openTab(evt, tabName) {

  var i, tabContent, tabLinks;

  tabContent = document.getElementsByClassName("tab__content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("tab__button");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" tab__active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " tab__active";
}

// Glossary
// Inner Tabs
function openGlossary(evt, tabName) {

  var i, tabContent, tabLinks;

  tabContent = document.getElementsByClassName('glossary__article');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  tabLinks = document.getElementsByClassName('glossary__button');
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' glossary__button--active', '');
  }

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' glossary__button--active';
}

// Accordion
var acc = document.getElementsByClassName('glossary__name');

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('glossary__name--active');
    
    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }; 
  });
};

// Video
var zulutradeVideo = document.querySelector('.zulu__video');
var zulutradePlay = document.querySelector('.zulu__play');
var zulutradePause = document.querySelector('.zulu__pause');
var zulutradeFull = document.querySelector('.zulu__full');
var zulutradeMuted = document.querySelector('.zulu__muted');

zulutradeVideo.volume = 0.02;

zulutradePlay.addEventListener('click', function () {
  zulutradeVideo.play();
  zulutradePlay.style.opacity = '0';
  zulutradePause.classList.remove('zulu__pause--active');
  zulutradePause.classList.add('zulu__pause--inactive');
});

zulutradePause.addEventListener('click', function () {
  if (zulutradePause.classList.contains('zulu__pause--inactive')) {
    zulutradeVideo.pause();
    zulutradePlay.style.opacity = '1';
    zulutradePause.classList.remove('zulu__pause--inactive');
    zulutradePause.classList.add('zulu__pause--active');
  } else {
    zulutradeVideo.play();
    zulutradePlay.style.opacity = '0';
    zulutradePause.classList.remove('zulu__pause--active');
    zulutradePause.classList.add('zulu__pause--inactive');
  }
});

zulutradeFull.addEventListener('click', function () {
  zulutradePlay.style.opacity = '0';
  
  if (zulutradeVideo.requestFullscreen) {
    zulutradeVideo.requestFullscreen();
    zulutradeVideo.play();
  } else if (zulutradeVideo.mozRequestFullScreen) {
    zulutradeVideo.mozRequestFullScreen();
    zulutradeVideo.play();
  } else if (zulutradeVideo.webkitRequestFullscreen) {
    zulutradeVideo.webkitRequestFullscreen();
    zulutradeVideo.play();
  };
});

zulutradeMuted.addEventListener('click', function () {
  
  if (zulutradeMuted.classList.contains('zulu__muted--inactive')) {
    zulutradeVideo.muted = true;
    zulutradeMuted.classList.remove('zulu__muted--inactive');
    zulutradeMuted.classList.add('zulu__muted--active');
  } else {
    zulutradeVideo.muted = false;
    zulutradeMuted.classList.remove('zulu__muted--active');
    zulutradeMuted.classList.add('zulu__muted--inactive');
  }
});

// Accordion
var acc = document.getElementsByClassName("zulu__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
};