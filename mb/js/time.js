$('.title__down').click(function(event){
    $('html, body').animate({
        scrollTop: $(this).offset().top + 180
    }, 900);
    event.preventDefault();
});