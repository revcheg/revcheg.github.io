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
      resetPhoto();
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
    var numberOfPhoto = tabSections[index].querySelectorAll('.info__gallery li');
    var counter = 0;
    
    galleryNext.addEventListener('click', function () {
      if (counter >= numberOfPhoto.length - 2) {
        counter = numberOfPhoto.length - 2;
      }
      counter++;
      galleryList.style.left = '-' + counter + '00%';
    });
    
    galleryPrev.addEventListener('click', function () {
      counter--;
      if (counter <= 0) {
        counter = 0;
      }
      galleryList.style.left = '-' + counter + '00%';
    });
  };
  
  function resetPhoto () {
    var galleryList = document.querySelectorAll('.info__gallery');
    for (var g = 0; g < galleryList.length; g++) {
      galleryList[g].style.left = '0%';
    }
  };
})();