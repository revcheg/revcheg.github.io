var sections = document.querySelectorAll('.section');
var scrollCounter = 0;

(function () {
  var marker = true;
  var delta;
  var interval = 150;
  var firstCounter = 0;
  var secondCounter;

  window.addEventListener('wheel', function(evt) {
    firstCounter++;
    delta = evt.deltaY;
    if (marker) wheelStart();
    return false;
  });

  function wheelStart() {
    marker = false;
    wheelAct();
  };

  function wheelAct() {
    secondCounter = firstCounter;
    setTimeout(function() {
      if (secondCounter == firstCounter) {
        wheelEnd();
      } else {
        wheelAct();
      }
    }, interval);
  };

  function wheelEnd() {
    marker = true;
    firstCounter = 0;
    secondCounter = 0;

    if (delta > 0) {
      scrollCounter++;
    } else {
      scrollCounter--;
    }

    scrolling();
  };
})();

function scrolling() {
  if (scrollCounter > 9) {
    scrollCounter = 9;
  } else if (scrollCounter < 0) {
    scrollCounter = 0;
  }

  var offsetTopBlock = sections[scrollCounter].offsetTop;

  window.scrollTo({
    top: offsetTopBlock,
    behavior: "smooth"
  });
};