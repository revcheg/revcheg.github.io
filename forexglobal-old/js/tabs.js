function openTab (evt, tabName) {
  var i, tabContent, tabLink;
  tabContent = document.getElementsByClassName("tab__content");
  for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
  }
  tabLink = document.getElementsByClassName("tab__link");
  for (i = 0; i < tabLink.length; i++) {
      tabLink[i].className = tabLink[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
};

// Test
var contents = document.querySelectorAll('.tab__content');
var tabs = document.querySelectorAll('.tab button');


var tabBronze = document.querySelector('.tab__bronze');
var tabSilver = document.querySelector('.tab__silver');

var btns = document.querySelectorAll('.account-comparison__control button');
var btnBronze = document.querySelector('.account-comparison__bronze');
var btnSilver = document.querySelector('.account-comparison__silver');



function changeContentBronze () {
  btns[0].classList.add('bronze');
  btns[1].classList.remove('silver');
  btns[2].classList.remove('gold');
  btns[3].classList.remove('free');
  
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.background = '#dc9554';
    tabSilver.style.display = 'none';
    tabBronze.style.display = 'table';
  }
}

function changeContentSilver () {
  btns[0].classList.remove('bronze');
  btns[1].classList.add('silver');
  btns[2].classList.remove('gold');
  btns[3].classList.remove('free');
  
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.background = '#9b9b9b';
    tabBronze.style.display = 'none';
    tabSilver.style.display = 'table';
  }
}

function changeContentGold () {
  btns[0].classList.remove('bronze');
  btns[1].classList.remove('silver');
  btns[2].classList.add('gold');
  btns[3].classList.remove('free');
  
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.background = '#e7c85d';
  }
}

function changeContentFree () {
  btns[0].classList.remove('bronze');
  btns[1].classList.remove('silver');
  btns[2].classList.remove('gold');
  
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.background = '#fff';
  }
}