var registr = document.querySelector('.page-header__form--sign-up');
var login = document.querySelector('.page-header__form--login');

var signIn = document.querySelector('.page-header__login').onclick = function (e) {
  e.preventDefault();
  registr.style.display = 'none';
  login.style.display = 'flex';
};

var signUp = document.querySelector('.page-header__sign-up').onclick = function (e) {
  e.preventDefault();
  login.style.display = 'none';
  registr.style.display = 'flex';
};