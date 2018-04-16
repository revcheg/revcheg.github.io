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
  }
});

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