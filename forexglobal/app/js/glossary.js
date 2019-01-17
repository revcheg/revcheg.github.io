// Glossary
// Inner Tabs
function openGlossary(evt, tabName) {

  var i, tabContent, tabLinks;

  tabContent = document.getElementsByClassName('glossary__article');
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }

  tabLinks = document.getElementsByClassName('glossary__button');
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(' glossary__button--active', '');
  }

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.className += ' glossary__button--active';
}