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
(function () {
  var buttons = document.querySelectorAll('.tab__button');
  var tabs = document.querySelectorAll('.tab__content');
  
  var indexButton = 3;
  var buttonsArray = [];
  
  for (var i = 0; i < buttons.length; i++){
    buttonsArray.push(buttons[i]);
    buttons[i].addEventListener('click', function(evt){
      tabs[indexButton].classList.add('tab__content--hide');
      buttons[indexButton].classList.remove('tab__button--active');
      indexButton = buttonsArray.indexOf(evt.target);
      swapTab(indexButton);
    });
  };
  
  var swapTab = function(indexButton) {
    tabs[indexButton].classList.remove('tab__content--hide');
    buttons[indexButton].classList.add('tab__button--active');
  };
})();
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
// Video
var zulutradeVideo = document.querySelector('.zulu__video');
var zulutradePlay = document.querySelector('.zulu__play');
var zulutradePause = document.querySelector('.zulu__pause');
var zulutradeFull = document.querySelector('.zulu__full');
var zulutradeMuted = document.querySelector('.zulu__muted');

//zulutradeVideo.volume = 0.02;

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