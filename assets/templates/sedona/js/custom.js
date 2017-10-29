var toggle = document.querySelector('.navigation__toggle');
var navigation = document.querySelector('.navigation');
var hotelButton = document.querySelector('.hotel__find');
var hotelMap = document.querySelector('.hotel__map');
var map;

navigation.classList.remove('navigation--nojs');

if(hotelButton) hotelButton.removeAttribute('disabled');
if(hotelMap) hotelMap.classList.remove('hotel__map--nojs');

toggle.addEventListener('click', function() {
	navigation.classList.toggle('navigation--opened');
});

function initMap() {
  map = new google.maps.Map(document.querySelector('.hotel__map-map'), {
    center: {lat: 35.195778, lng: -111.652594},
    zoom: 8,
    zoomControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false
  });
}