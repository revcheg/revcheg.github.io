(function () {
  var checkbox = document.querySelectorAll('.cost__input');
  var state = false;
  var value;
  
  var cost = document.querySelectorAll('.cost__value');
  
  for (var i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('change', function () {
      if (this.checked == true) {
        state = true;
        value = 650;
      } else {
        state = false;
        value = -650;
      }
      
      changeState();
      changeCost();
    })
  }
  
  function changeState() {
    for (var j = 0; j < checkbox.length; j++) {
      checkbox[j].checked = state;
    }
  };
  
  function changeCost() {
    for (var m = 0; m < cost.length; m++) {
      var current = cost[m].textContent;
      var integer = parseInt(current, 10);
      integer = integer + value;
      cost[m].innerHTML = integer;
    }
  }
})();