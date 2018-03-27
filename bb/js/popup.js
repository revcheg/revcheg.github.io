// var navMain = document.querySelector('.main-nav');
// var navToggle = document.querySelector('.main-nav__toggle');
// 
// navMain.classList.remove('main-nav--nojs');
// 
// navToggle.addEventListener('click', function() {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   }
// });

var link = document.querySelectorAll(".btn--popup");
var popup = document.querySelector(".popup");
var overlay = document.querySelector('.popup__overlay');
var login = popup.querySelector("[name=login]");
// var password = popup.querySelector("[name=password]");
var form = popup.querySelector("form");
var close = document.querySelector(".modal-login__closed");
var storage = localStorage.getItem("login");

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("popup--hide");
    popup.classList.add("popup--show");
    overlay.classList.remove('popup__overlay--hide');
    overlay.classList.add('popup__overlay--show');
    login.focus();
  });
}


// close.addEventListener("click", function(event) {
//   event.preventDefault();
//   popup.classList.remove("modal-login--show");
//   popup.classList.remove("modal-login--error");
//   popup.classList.add("modal-login--hide");
//   popup.classList.remove("modal-login--static");
// });

form.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.add("modal-login--error");
    popup.classList.add("modal-login--static");
    var pew = setTimeout(function(){
          popup.classList.remove("modal-login--hide");
          popup.classList.remove("modal-login--show");
          popup.classList.remove("modal-login--error");
          clearTimeout(pew);
    }, 600);
  } else {
      localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    popup.classList.remove("popup--show");
    // popup.classList.remove("modal-login--error");
    popup.classList.add("popup--hide");
    // popup.classList.remove("modal-login--static");
    overlay.classList.remove('popup__overlay--show');
    overlay.classList.add('popup__overlay--hide');
  }
});

var entryForm = document.querySelector(".entry__form");
var name = entryForm.querySelector("[name=name]");
var email = entryForm.querySelector("[name=email]");
var modal = document.querySelector(".modal");
var modalFail = document.querySelector(".modal--fail");
var modalSuccess = document.querySelector(".modal--success");
var modalClose = modal.querySelector(".modal__closed");

entryForm.addEventListener("submit", function(event) {
  if (!name.value || !email.value) {
    event.preventDefault();
    modalFail.classList.remove("modal--hide");
    modalFail.classList.add("modal--show");
  }
});

modalClose.addEventListener("click", function(event) {
  event.preventDefault();
  modalFail.classList.remove("modal--show");
  modalFail.classList.add("modal--hide");
});