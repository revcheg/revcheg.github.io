(function () {
  var anchors = document.querySelectorAll('.nav__anchor');
  
  var indexButton = 0;
  var anchorsArray = [];
  for (var i = 0; i < anchors.length; i++){
    anchorsArray.push(anchors[i]);
    anchors[i].addEventListener('click', function(evt){
      indexButton = anchorsArray.indexOf(evt.currentTarget);
      scrollCounter = indexButton + 1;
      scrolling();
    });
  }
})();