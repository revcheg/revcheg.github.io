function openTabs (evt, cityName) {

  var i, legalWrapper, legalButton;

  legalWrapper = document.getElementsByClassName('legal__wrapper');

  for (i = 0; i < legalWrapper.length; i++) {
    legalWrapper[i].style.display = 'none';
  }

  legalButton = document.getElementsByClassName('legal__button');

  for (i = 0; i < legalButton.length; i++) {
    legalButton[i].className = legalButton[i].className.replace(' legal__active', '');
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += ' legal__active';
}