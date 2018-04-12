// function openTabs (evt, cityName) {
// 
//   var i, tabsWrapper, tabsButton;
// 
//   tabsWrapper = document.getElementsByClassName('tabs__wrapper');
// 
//   for (i = 0; i < tabsWrapper.length; i++) {
//     tabsWrapper[i].style.display = 'none';
//   }
// 
//   tabsButton = document.getElementsByClassName('tabs__button');
// 
//   for (i = 0; i < tabsButton.length; i++) {
//     tabsButton[i].className = tabsButton[i].className.replace(' tabs__active', '');
//   }
// 
//   document.getElementById(cityName).style.display = 'block';
//   evt.currentTarget.className += ' tabs__active';
// }

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