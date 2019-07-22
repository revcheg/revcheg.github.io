(function () {
  var tabButtons = document.querySelectorAll('.info__button');
  var tabSections = document.querySelectorAll('.info__tab');
  var tempArray = [];
  var index = 0;
  
  activateTab(index);
  setGallery();
  
  for (var i = 0; i < tabButtons.length; i++){
    tempArray.push(tabButtons[i]);
    tabButtons[i].addEventListener('click', function(evt){
      index = tempArray.indexOf(evt.currentTarget);
      activateTab();
      setGallery();
    });
  }
  
  function activateTab () {
    for (var j = 0; j < tabSections.length; j++) {
      tabSections[j].classList.remove('info__tab--active');
      tabButtons[j].classList.remove('info__button--active');
    }
    
    tabSections[index].classList.add('info__tab--active');
    tabButtons[index].classList.add('info__button--active');
  };
  
  function setGallery () {
    var galleryList = tabSections[index].querySelector('.info__gallery');
    var galleryPrev = tabSections[index].querySelector('.info__swipe--prev');
    var galleryNext = tabSections[index].querySelector('.info__swipe--next');
    var numberOfPhoto = tabSections[index].querySelectorAll('.info__gallery li').length;
    var counter = 0;
    
    galleryNext.addEventListener('click', function () {
      // counter++;
      if (counter >= numberOfPhoto) {
        counter = numberOfPhoto - 1;
      } else {
        counter++;
      }
      galleryList.style.left = '-' + counter + '00%';
    });
  };
})();
