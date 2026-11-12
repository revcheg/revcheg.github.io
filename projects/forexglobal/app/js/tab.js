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