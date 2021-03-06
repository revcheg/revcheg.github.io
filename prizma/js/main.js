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

// Menu
var menu = document.querySelector('.nav');
var user = document.querySelector('.header__user');
var menuButton = document.querySelector('.header__toggle');

menuButton.addEventListener('click', function () {
  if (menuButton.classList.contains('header__toggle--inactive')) {
    menuButton.classList.remove('header__toggle--inactive');
    menuButton.classList.add('header__toggle--active');
    menu.classList.add('nav--active');
    user.classList.add('header__user--active');
  } else {
    menuButton.classList.remove('header__toggle--active');
    menuButton.classList.add('header__toggle--inactive');
    menu.classList.remove('nav--active');
    user.classList.remove('header__user--active');
  }
});

// Table
var table = document.querySelector('.table');
var hoverMini = document.querySelectorAll('.table__mini');
var hoverClassic = document.querySelectorAll('.table__classic');
var hoverPremium = document.querySelectorAll('.table__premium');

for (var i = 0; i < hoverMini.length; i++) {
  hoverMini[i].addEventListener('mouseover', function() {
    table.classList.add('table__mini');
  });
  
  hoverMini[i].addEventListener('mouseout', function() {
    table.classList.remove('table__mini');
  });
};

for (var i = 0; i < hoverClassic.length; i++) {
  hoverClassic[i].addEventListener('mouseover', function() {
    table.classList.add('table__classic');
  });
  
  hoverClassic[i].addEventListener('mouseout', function() {
    table.classList.remove('table__classic');
  });
};

for (var i = 0; i < hoverPremium.length; i++) {
  hoverPremium[i].addEventListener('mouseover', function() {
    table.classList.add('table__premium');
  });
  
  hoverPremium[i].addEventListener('mouseout', function() {
    table.classList.remove('table__premium');
  });
};

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

// Inner Tabs
function openTab(evt, tabName) {

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

// Register
var switchButton = document.querySelector('.form__switch');
var passwordInput = document.querySelector('.form__input--password');

switchButton.addEventListener('click', function () {
  if (switchButton.classList.contains('form__switch--close')) {
    switchButton.classList.remove('form__switch--close');
    switchButton.classList.add('form__switch--open');
    passwordInput.setAttribute('type', 'text');
  } else {
    switchButton.classList.remove('form__switch--open');
    switchButton.classList.add('form__switch--close');
    passwordInput.setAttribute('type', 'password');
  };
});