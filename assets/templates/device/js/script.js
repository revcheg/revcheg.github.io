var modalOpen = document.querySelector("#js-write-us");
var modalContent = document.querySelector(".modal-content");
var modalClose = document.querySelector("#js-modal-close");
var modalForm = document.querySelector(".modal-form");
var modalLogin = document.querySelector("#js-modal-login");
var modalEmail = document.querySelector("#js-modal-email");
var modalText = document.querySelector("#js-modal-text");
var modalLoginStorage = localStorage.getItem("modalLogin");
var modalEmailStorage = localStorage.getItem("modalEmail");

var mapOpen = document.querySelector("#js-open-map");
var modalMap = document.querySelector(".modal-content-map");
var mapClose = document.querySelector("#js-map-close");


modalOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalContent.classList.add("modal-content-show");
if (modalLoginStorage && modalEmailStorage) {
  modalLogin.value = modalLoginStorage;
  modalEmail.value = modalEmailStorage;
  modalText.focus();
} else {
  modalLogin.focus();
}
});

modalForm.addEventListener("submit", function(evt) {
  if (!modalLogin.value) {
  evt.preventDefault();
  modalLogin.classList.add("modal-form-invalid");
} else {
  localStorage.setItem("modalLogin", modalLogin.value);
}
  if (!modalEmail.value) {
  evt.preventDefault();
  modalEmail.classList.add("modal-form-invalid");
} else {
  localStorage.setItem("modalEmail", modalEmail.value);
} if (!modalText.value) {
  evt.preventDefault();
  modalText.classList.add("modal-form-invalid");
} else {
  localStorage.setItem("modalText", modalText.value);
}
});

modalLogin.addEventListener("focus", function(evt) {
  if (modalLogin.classList.contains("modal-form-invalid")) {
    modalLogin.classList.remove("modal-form-invalid");
  }
});

modalEmail.addEventListener("focus", function(evt) {
  if (modalEmail.classList.contains("modal-form-invalid")) {
    modalEmail.classList.remove("modal-form-invalid");
  }
});

modalText.addEventListener("focus", function(evt) {
  if (modalText.classList.contains("modal-form-invalid")) {
    modalText.classList.remove("modal-form-invalid");
  }
});

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalContent.classList.remove("modal-content-show");
  modalLogin.classList.remove("modal-form-invalid");
  modalEmail.classList.remove("modal-form-invalid");
  modalText.classList.remove("modal-form-invalid");
});



mapOpen.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-content-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-content-show");
});



window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modalContent.classList.contains("modal-content-show")) {
      modalContent.classList.remove("modal-content-show");
      modalLogin.classList.remove("modal-form-invalid");
      modalEmail.classList.remove("modal-form-invalid");
      modalText.classList.remove("modal-form-invalid");
    }
    if (modalMap.classList.contains("modal-content-show")) {
      modalMap.classList.remove("modal-content-show");
    }
  }
});
