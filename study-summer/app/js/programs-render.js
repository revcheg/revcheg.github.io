(function () {
  var list = document.querySelector('.programs__list');
  var popupTemplate = document.querySelector('.programs__template').content;

  for (var i = 0; i < programsData.length; i++) {
    var item = document.createElement('li');
    item.classList.add('programs__item');
    var content = popupTemplate.cloneNode(true);
    content.querySelector('.programs__name').innerHTML = programsData[i].name;
    content.querySelector('source').srcset = programsData[i].webp;
    content.querySelector('img').src = programsData[i].jpg;
    content.querySelector('img').alt = programsData[i].alt;
    item.appendChild(content);
    list.appendChild(item);
  };
})();