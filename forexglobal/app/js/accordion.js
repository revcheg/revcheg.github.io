// Accordion
var acc = document.getElementsByClassName('glossary__name');

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('glossary__name--active');
    
    var panel = this.nextElementSibling;
    
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }; 
  });
};