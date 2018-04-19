$('.title__down').click(function(event){
    $('html, body').animate({
        scrollTop: $(this).offset().top + 180
    }, 900);
    event.preventDefault();
});

var priceImg = document.querySelector('.price__img');
var priceTitle = document.querySelector('.price__title span');
var priceTitleM = document.querySelector('.price__title-m span');
var priceCurrency = document.querySelector('.price__currency');
var priceCourse = document.querySelector('.price__course');

function gpb () {
  priceImg.src = 'img/price-flag.png';
  priceTitle.innerHTML = 'GPB/USD';
  priceTitleM.innerHTML = 'GPB/USD';
  priceCurrency.innerHTML = 'GPB/USD';
  priceCourse.innerHTML = '1 GPB/USD = <span>894$</span>'
}

function bitcoin () {
  priceImg.src = 'img/price-bitcoin.png';
  priceTitle.innerHTML = 'Bitcoin';
  priceTitleM.innerHTML = 'Bitcoin';
  priceCurrency.innerHTML = 'биткоина';
  priceCourse.innerHTML = '1 BTC = <span>8943.2377024$</span>'
}

function tesla () {
  priceImg.src = 'img/price-tesla.png';
  priceTitle.innerHTML = 'Tesla';
  priceTitleM.innerHTML = 'Tesla';
  priceCurrency.innerHTML = 'тесла';
  priceCourse.innerHTML = '1 Tesla = <span>12312$</span>'
}