var thMini = document.querySelector('.table__mini-th');
var thClassic = document.querySelector('.table__classic-th');
var thPremium = document.querySelector('.table__premium-th');

var btnMini = document.querySelector('.button--mini');
var btnClassic = document.querySelector('.button--classic');
var btnPremium = document.querySelector('.button--premium');

var tdMiniDark = document.querySelectorAll('.table__mini-td-d');
var tdMiniLight = document.querySelectorAll('.table__mini-td-l');
var tdClassicDark = document.querySelectorAll('.table__classic-td-d');
var tdClassicLight = document.querySelectorAll('.table__classic-td-l');
var tdPremiumDark = document.querySelectorAll('.table__premium-td-d');
var tdPremiumLight = document.querySelectorAll('.table__premium-td-l');

thMini.addEventListener('mouseover', function() {
  thMini.classList.add('hover-th-mini');
  btnMini.style.background = '#009f3c';

  for (var i = 0; i < tdMiniDark.length; i++) {
    tdMiniDark[i].classList.add('hover-td-d');
  };
  
  for (var i = 0; i < tdMiniLight.length; i++) {
    tdMiniLight[i].classList.add('hover-td-l');
  };
});

thClassic.addEventListener('mouseover', function() {
  thClassic.classList.add('hover-th-classic');
  btnClassic.style.background = '#009f3c';
  
  for (var i = 0; i < tdClassicDark.length; i++) {
    tdClassicDark[i].classList.add('hover-td-d');
  };
  
  for (var i = 0; i < tdClassicLight.length; i++) {
    tdClassicLight[i].classList.add('hover-td-l');
  };
});

thPremium.addEventListener('mouseover', function() {
  thPremium.classList.add('hover-th-premium');
  btnPremium.style.background = '#009f3c';
  
  for (var i = 0; i < tdPremiumDark.length; i++) {
    tdPremiumDark[i].classList.add('hover-td-d');
  };
  
  for (var i = 0; i < tdPremiumLight.length; i++) {
    tdPremiumLight[i].classList.add('hover-td-l');
  };
});

// Remove
thMini.addEventListener('mouseout', function() {
  thMini.classList.remove('hover-th-mini');
  btnMini.style.background = 'transparent';
  
  for (var i = 0; i < tdMiniDark.length; i++) {
    tdMiniDark[i].classList.remove('hover-td-d');
  };
  
  for (var i = 0; i < tdMiniLight.length; i++) {
    tdMiniLight[i].classList.remove('hover-td-l');
  };
});

thClassic.addEventListener('mouseout', function() {
  thClassic.classList.remove('hover-th-classic');
  btnClassic.style.background = 'transparent';
  
  for (var i = 0; i < tdClassicDark.length; i++) {
    tdClassicDark[i].classList.remove('hover-td-d');
  };
  
  for (var i = 0; i < tdClassicLight.length; i++) {
    tdClassicLight[i].classList.remove('hover-td-l');
  };
});

thPremium.addEventListener('mouseout', function() {
  thPremium.classList.remove('hover-th-premium');
  btnPremium.style.background = 'transparent';
  
  for (var i = 0; i < tdPremiumDark.length; i++) {
    tdPremiumDark[i].classList.remove('hover-td-d');
  };
  
  for (var i = 0; i < tdPremiumLight.length; i++) {
    tdPremiumLight[i].classList.remove('hover-td-l');
  };
});