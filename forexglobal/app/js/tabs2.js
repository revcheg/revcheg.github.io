// Inner Tabs
function openTab(evt, tabName) {

  var i, tabContent, tabLinks;

  tabContent = document.getElementsByClassName("tab__content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabLinks = document.getElementsByClassName("tab__button");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" tab__active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " tab__active";
}