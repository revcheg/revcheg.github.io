(function () {
  var list = document.querySelector('.programs__list');
  var load = document.querySelector('.programs__load');
  var popupTemplate = document.querySelector('.programs__template').content;

  var programsCounter = 3;
  renderPrograms();
  
  load.addEventListener('click', function () {
    programsCounter = programsCounter + 3;
    clearPrograms();
    renderPrograms();
  });
  
  function clearPrograms() {
    var item = document.querySelectorAll('.programs__item');
    for (var j = 0; j < item.length; j++) {
      item[j].remove();
    }
  };
  
  function renderPrograms() {
    var programsLength = programsData.slice(0, programsCounter).length;
    
    for (var i = 0; i < programsLength; i++) {
      var item = document.createElement('li');
      item.classList.add('programs__item');
      var content = popupTemplate.cloneNode(true);
      content.querySelector('.programs__name').innerHTML = programsData[i].name;
      content.querySelector('source').srcset = programsData[i].webp;
      content.querySelector('img').src = programsData[i].jpg;
      content.querySelector('img').alt = programsData[i].alt;
      item.appendChild(content);
      list.appendChild(item);
    }
    
    if (programsCounter >= programsData.length) {
      load.disabled = true;
    }
  };
})();