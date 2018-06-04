// Up
$('.footer__up').click(function(event){
    $('html, body').animate({
        scrollTop: $('html').offset().top
    }, 1000);
    event.preventDefault();
});

// Local
var select = document.querySelector('.nav__select');

$.html5Translate = function(dict, lang){
  $('[data-translate-key]').each(function(){
    $(this).html( dict[ lang ][ $(this).data('translateKey') ] );
  });
};

select.addEventListener('change', function () {
  var selectValue = select.value;
  $(document).ready(function(){
      $.html5Translate(dict, selectValue);
  });
});