var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-content-close");
var login = popup.querySelector("[name=login]");
var find = document.querySelector(".find-us");
var map = document.querySelector(".modal-content-map");
var closeMap = map.querySelector(".modal-content-close");
var mapMain = document.querySelector(".js-open-map");

mapMain.addEventListener("click", function() {
    map.classList.add("modal-content-map-show");
    overlay.classList.add("modal-overlay-show");
});

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");
    login.focus();
});

close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-overlay-show");
});

overlay.addEventListener("click", function(){
    popup.classList.remove("modal-content-show");
    overlay.classList.remove("modal-overlay-show");
    map.classList.remove("modal-content-map-show");
});

find.addEventListener("click", function(event){
    event.preventDefault();
    map.classList.add("modal-content-map-show");
    overlay.classList.add("modal-overlay-show");
});

closeMap.addEventListener("click", function() {
    map.classList.remove("modal-content-map-show");
    overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
   if (event.keyCode === 27) {
       if (popup.classList.contains("modal-content-show")) {
           popup.classList.remove("modal-content-show");   
           overlay.classList.remove("modal-overlay-show");
       }  

       if (map.classList.contains("modal-content-map-show")) {
           map.classList.remove("modal-content-map-show");
           overlay.classList.remove("modal-overlay-show");
       }
   } 
});