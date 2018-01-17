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

function changeContentBronze () {
  var origin = document.querySelector('.tab__origin');
  if (origin == '#dc9554') {
    origin.style.background = 'red';
  }
  // var silver = document.querySelector('.tab__silver').style.display = 'none';
  // var bronze = document.querySelector('.tab__bronze').style.display = 'block';
};

function changeContentSilver () {
  var origin = document.querySelector('.tab__origin').classList.toggle('tab__silver');
  // var silver = document.querySelector('.tab__silver').style.display = 'none';
  // var bronze = document.querySelector('.tab__bronze').style.display = 'block';
};

// function changeContentBronze () {
//   var origin = document.querySelector('.tab__origin').style.display = 'none';
//   var silver = document.querySelector('.tab__silver').style.display = 'none';
//   var bronze = document.querySelector('.tab__bronze').style.display = 'block';
// };
// 
// function changeContentSilver () {
//   var origin = document.querySelector('.tab__origin').style.display = 'none';
//   var bronze = document.querySelector('.tab__bronze').style.display = 'none';
//   var silver = document.querySelector('.tab__silver').style.display = 'block';
// };