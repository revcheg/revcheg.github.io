var hoverMini = document.querySelectorAll('.hover-mini');
var hoverClassic = document.querySelectorAll('.hover-classic');
var hoverPremium = document.querySelectorAll('.hover-premium');
var table = document.querySelector('.table');

for (var i = 0; i < hoverMini.length; i++) {
  hoverMini[i].addEventListener('mouseover', function() {
    table.classList.add('mini-hover');
  });
  
  hoverMini[i].addEventListener('mouseout', function() {
    table.classList.remove('mini-hover');
  });
};

for (var i = 0; i < hoverClassic.length; i++) {
  hoverClassic[i].addEventListener('mouseover', function() {
    table.classList.add('classic-hover');
  });
  
  hoverClassic[i].addEventListener('mouseout', function() {
    table.classList.remove('classic-hover');
  });
};

for (var i = 0; i < hoverPremium.length; i++) {
  hoverPremium[i].addEventListener('mouseover', function() {
    table.classList.add('premium-hover');
  });
  
  hoverPremium[i].addEventListener('mouseout', function() {
    table.classList.remove('premium-hover');
  });
};