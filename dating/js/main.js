// Slick
// $('.profile__photos').slick({
//   autoplay: false,
//   autoplaySpeed: 2000,
//   dots: false,
//   arrows: false,
//   slidesToShow: 5,
//   responsive: [{
//     breakpoint: 1024,
//     settings: {
//       // slidesToShow: 3,
//     }
//   }, {
//     breakpoint: 600,
//     settings: {
//       // slidesToShow: 2,
//     }
//   }, {
//     breakpoint: 300,
//     settings: 'uncslick'
//   }]
// });

// Mobile Nav
(function () {
  var buttons = document.querySelectorAll('.nav__button');
  var menus = document.querySelectorAll('.profile__list--mobile');
  
  buttons[0].addEventListener('click', function () {
    if (menus[0].classList.contains('profile__list--inactive')) {
      menus[0].classList.remove('profile__list--inactive');
      menus[0].classList.add('profile__list--active');
      menus[1].classList.remove('profile__list--active');
      menus[1].classList.add('profile__list--inactive');
      menus[2].classList.remove('profile__list--active');
      menus[2].classList.add('profile__list--inactive');
      menus[3].classList.remove('profile__list--active');
      menus[3].classList.add('profile__list--inactive');
      
      buttons[0].classList.add('nav__button--active');
      buttons[1].classList.remove('nav__button--active');
      buttons[2].classList.remove('nav__button--active');
      buttons[3].classList.remove('nav__button--active');
      
    } else {
      menus[0].classList.remove('profile__list--active');
      menus[0].classList.add('profile__list--inactive');
      
      buttons[0].classList.remove('nav__button--active');
    }
  });

  buttons[1].addEventListener('click', function () {
    if (menus[1].classList.contains('profile__list--inactive')) {
      menus[1].classList.remove('profile__list--inactive');
      menus[1].classList.add('profile__list--active');
      menus[0].classList.remove('profile__list--active');
      menus[0].classList.add('profile__list--inactive');
      menus[2].classList.remove('profile__list--active');
      menus[2].classList.add('profile__list--inactive');
      menus[3].classList.remove('profile__list--active');
      menus[3].classList.add('profile__list--inactive');
      
      buttons[1].classList.add('nav__button--active');
      buttons[0].classList.remove('nav__button--active');
      buttons[2].classList.remove('nav__button--active');
      buttons[3].classList.remove('nav__button--active');
      
    } else {
      menus[1].classList.remove('profile__list--active');
      menus[1].classList.add('profile__list--inactive');
      
      buttons[1].classList.remove('nav__button--active');
    }
  });
  
  buttons[2].addEventListener('click', function () {
    if (menus[2].classList.contains('profile__list--inactive')) {
      menus[2].classList.remove('profile__list--inactive');
      menus[2].classList.add('profile__list--active');
      menus[0].classList.remove('profile__list--active');
      menus[0].classList.add('profile__list--inactive');
      menus[1].classList.remove('profile__list--active');
      menus[1].classList.add('profile__list--inactive');
      menus[3].classList.remove('profile__list--active');
      menus[3].classList.add('profile__list--inactive');
      
      buttons[2].classList.add('nav__button--active');
      buttons[0].classList.remove('nav__button--active');
      buttons[1].classList.remove('nav__button--active');
      buttons[3].classList.remove('nav__button--active');
      
    } else {
      menus[2].classList.remove('profile__list--active');
      menus[2].classList.add('profile__list--inactive');
      
      buttons[2].classList.remove('nav__button--active');
    }
  });
  
  buttons[3].addEventListener('click', function () {
    if (menus[3].classList.contains('profile__list--inactive')) {
      menus[3].classList.remove('profile__list--inactive');
      menus[3].classList.add('profile__list--active');
      menus[1].classList.remove('profile__list--active');
      menus[1].classList.add('profile__list--inactive');
      menus[2].classList.remove('profile__list--active');
      menus[2].classList.add('profile__list--inactive');
      menus[0].classList.remove('profile__list--active');
      menus[0].classList.add('profile__list--inactive');
      
      buttons[3].classList.add('nav__button--active');
      buttons[0].classList.remove('nav__button--active');
      buttons[1].classList.remove('nav__button--active');
      buttons[2].classList.remove('nav__button--active');
      
    } else {
      menus[3].classList.remove('profile__list--active');
      menus[3].classList.add('profile__list--inactive');
      
      buttons[3].classList.remove('nav__button--active');
    }
  });
})();

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("profile__content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("profile__tab");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" profile__tab--active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " profile__tab--active";
}

(function () {
  var addDesktop = document.querySelector('.popup__add--desktop');
  var addMobile = document.querySelector('.popup__add--mobile');
  var popup = document.querySelector('.profile__popup');
  var overlay = document.querySelector('.popup__overlay');
  var close = document.querySelector('.profile__popup-close');
  
  addDesktop.addEventListener('click', function () {
    popup.classList.remove('profile__popup--inactive');
    popup.classList.add('profile__popup--active');
    
    overlay.classList.remove('popup__overlay--inactive');
    overlay.classList.add('popup__overlay--active');
  });
  
  addMobile.addEventListener('click', function () {
    popup.classList.remove('profile__popup--inactive');
    popup.classList.add('profile__popup--active');
    
    overlay.classList.remove('popup__overlay--inactive');
    overlay.classList.add('popup__overlay--active');
  });
  
  close.addEventListener('click', function () {
    popup.classList.add('profile__popup--inactive');
    popup.classList.remove('profile__popup--active');
    
    overlay.classList.remove('popup__overlay--active');
    overlay.classList.add('popup__overlay--inactive');
  });
  
  overlay.addEventListener('click', function () {
    popup.classList.add('profile__popup--inactive');
    popup.classList.remove('profile__popup--active');
    
    overlay.classList.remove('popup__overlay--active');
    overlay.classList.add('popup__overlay--inactive');
  });
  
  window.addEventListener('keydown', function(event) {
    if (event.keyCode === 27) {
      popup.classList.add('profile__popup--inactive');
      popup.classList.remove('profile__popup--active');
      
      overlay.classList.remove('popup__overlay--active');
      overlay.classList.add('popup__overlay--inactive');
    }
  });
})();