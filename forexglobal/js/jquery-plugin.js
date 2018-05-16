$('.tab__button--forex').click(function(event){
    $('html, body').animate({
        scrollTop: $(this).offset().top - 200
    }, 900);
    event.preventDefault();
});

$('.tab__button--commodities').click(function(event){
    $('html, body').animate({
        scrollTop: $(this).offset().top + 800
    }, 900);
    event.preventDefault();
});

$('.tab__button--metals').click(function(event){
    $('html, body').animate({
        scrollTop: $(this).offset().top + 1300
    }, 900);
    event.preventDefault();
});

$('.tab__button--energies').click(function(event){
    $('html, body').animate({
        scrollTop: $(this).offset().top + 300
    }, 900);
    event.preventDefault();
});

$('.tab__button--indices').click(function(event){
    $('html, body').animate({
        scrollTop: $(this).offset().top + 1800
    }, 900);
    event.preventDefault();
});

$('.tab__button--equities').click(function(event){
    $('html, body').animate({
        scrollTop: $(this).offset().top + 2300
    }, 900);
    event.preventDefault();
});