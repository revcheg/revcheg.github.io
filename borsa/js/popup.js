var btnFree = document.querySelectorAll(".button--free");
var btnSign = document.querySelector(".button--signin");
var btnOpen = document.querySelectorAll(".button--open");
var popupFree = document.querySelector(".popup--free");
var popupSign = document.querySelector(".popup--signin");
var popupRegi = document.querySelector(".popup--regi");

var overlay = document.querySelector('.popup__overlay');
// var login = popup.querySelector("[name=login]");
// var password = popup.querySelector("[name=password]");
// var form = popup.querySelector("form");
var closes = document.querySelectorAll(".popup__close");
// var storage = localStorage.getItem("login");

for (var i = 0; i < btnFree.length; i++) {
  btnFree[i].addEventListener("click", function(event) {
    event.preventDefault();
    popupFree.classList.remove("popup--hide");
    popupFree.classList.add("popup--show");
    overlay.classList.remove('popup__overlay--hide');
    overlay.classList.add('popup__overlay--show');
  });
}

for (var i = 0; i < btnOpen.length; i++) {
  btnOpen[i].addEventListener("click", function(event) {
    event.preventDefault();
    popupRegi.classList.remove("popup--hide");
    popupRegi.classList.add("popup--show");
    overlay.classList.remove('popup__overlay--hide');
    overlay.classList.add('popup__overlay--show');
  });
}

btnSign.addEventListener('click', function(event) {
  event.preventDefault();
  popupSign.classList.remove("popup--hide");
  popupSign.classList.add("popup--show");
  overlay.classList.remove('popup__overlay--hide');
  overlay.classList.add('popup__overlay--show');
});

for (var i = 0; i < closes.length; i++) {
  closes[i].addEventListener("click", function(event) {
    event.preventDefault();
    popupSign.classList.remove("popup--show");
    popupSign.classList.add("popup--hide");
    popupRegi.classList.remove("popup--show");
    popupRegi.classList.add("popup--hide");
    overlay.classList.remove("popup__overlay--show");
    overlay.classList.add("popup__overlay--hide");
    popupFree.classList.remove("popup--show");
    popupFree.classList.add("popup--hide");
  });
};

// overlay.addEventListener("click", function(event) {
//   event.preventDefault();
//   popup.classList.remove("popup--show");
//   popup.classList.add("popup--hide");
//   overlay.classList.remove("popup__overlay--show");
//   overlay.classList.add("popup__overlay--hide");
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