(function () {
  let form = document.querySelector('.request');
  let open = document.querySelector('.request__open');
  
  open.addEventListener('click', openForm);
  
  function openForm() {
    form.classList.remove('request--hide');
  };
})();