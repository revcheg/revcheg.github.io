var rangeInvest = document.querySelector(".range__invest");
var rangeGet = document.querySelector(".range__get");

var progressInvest = document.querySelector('.progress__invest');
var progressInvestOutput = document.querySelector('.range__invest-output');

var progressGet = document.querySelector('.progress__get');
var progressGetOutput = document.querySelector('.range__get-output');

function invest() {
	var val = $('.range__invest').val();

	$('.range__invest').css({'background':'-webkit-linear-gradient(left ,#002e5f 0%,#000 '+(val*100)/1000000+'%,#ddd '+(val*100)/1000000+'%, #ddd 100%)'});

	progressInvest.value = rangeInvest.value;
	progressInvestOutput.innerHTML = rangeInvest.value + ' USD';
};

function get() {
	var val = $('.range__get').val();

	$('.range__get').css({'background':'-webkit-linear-gradient(left, #002e5f 0%, #000 '+(val*100)/12+'%, #ddd '+(val*100)/12+'%, #ddd 100%)'});

	progressGet.value = rangeGet.value;
	progressGetOutput.innerHTML = rangeGet.value + ' USD';
};