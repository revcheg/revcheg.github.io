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

function changeContentBronze () {
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.background = '#dc9554';
  }
}

function changeContentSilver () {
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.background = '#9b9b9b';
  }
}

function changeContentGold () {
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.background = '#e7c85d';
  }
}

function changeContentFree () {
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.background = '#fff';
  }
}


// function changeContentFree () {
//   // Forex
//   var contentF = document.querySelector('.tab__content--forex');
//   contentF.style.background = '#000';
// }