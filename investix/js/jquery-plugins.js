// Up
$('.footer__up').click(function(event){
    $('html, body').animate({
        scrollTop: $('html').offset().top
    }, 1000);
    event.preventDefault();
});