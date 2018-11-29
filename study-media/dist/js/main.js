var controls = document.querySelectorAll('.advantages__controll');

for (var i = 0; i < controls.length; i++){
  controls[i].style.display = 'inline-block';
}

var slides = document.querySelectorAll('.advantages__box');
var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    goToSlide(currentSlide+1);
}

function previousSlide(){
    goToSlide(currentSlide-1);
}

function goToSlide(n){
    slides[currentSlide].className = 'advantages__box';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'advantages__box  advantages__box--show';
}


// var playing = true;
// var pauseButton = document.getElementById('pause');

// function pauseSlideshow(){
//     pauseButton.innerHTML = '&#9658;'; 
//     playing = false;
//     clearInterval(slideInterval);
// }

// function playSlideshow(){
//     pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
//     playing = true;
//     slideInterval = setInterval(nextSlide,2000);
// }

// pauseButton.onclick = function(){
//     if(playing){ pauseSlideshow(); }
//     else{ playSlideshow(); }
// };

var next = document.querySelector('.advantages__controll--next');
var previous = document.querySelector('.advantages__controll--prev');

next.onclick = function(){
    // pauseSlideshow();
    nextSlide();
};
previous.onclick = function(){
    // pauseSlideshow();
    previousSlide();
  };