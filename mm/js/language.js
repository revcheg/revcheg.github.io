window.onload = function () {
  document.getElementById('languageSelector').value = localStorage.getItem('lang');
  var selectedLanguage = localStorage.getItem('lang');

  if (selectedLanguage === 'EN') {
    assignEnglish();
  }
  else if(selectedLanguage === 'RU'){
    assignRussian();
  }
};

(function () {
  var select = document.getElementById('languageSelector');
  
  select.addEventListener('change', function () {
    var languageSelector = document.getElementById('languageSelector').selectedIndex;
    var selectorValue = document.getElementsByTagName('option')[languageSelector].value;
    localStorage.setItem('lang', selectorValue);

    if (selectorValue === 'EN') {
      assignEnglish();
    }
    else if(selectorValue === 'RU'){
      assignRussian();
    }
  })
})();