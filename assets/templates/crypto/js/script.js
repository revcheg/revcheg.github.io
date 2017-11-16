var par1 = document.querySelector(".hide-1");
var par2 = document.querySelector(".hide-2");
var par3 = document.querySelector(".hide-3");
var read = document.querySelector(".read");
var link1 = document.querySelector(".open-1").onclick = function (e) {
  e.preventDefault();
  par1.style.display = "block";
  read.style.minHeight = "400px";
  read.style.transition = "0.1s";
};

var link2 = document.querySelector(".open-2").onclick = function (e) {
  e.preventDefault();
  par2.style.display = "block";
  read.style.minHeight = "400px";
  read.style.transition = "0.1s";
};

var link3 = document.querySelector(".open-3").onclick = function (e) {
  e.preventDefault();
  par3.style.display = "block";
  read.style.minHeight = "400px";
  read.style.transition = "0.1s";
};
