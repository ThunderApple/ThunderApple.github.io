var hRat = 0;
var hBox = 0;
var wRat = 0;
var wBox = 0;

var tFood = 0;
var gFood = 10000;
var nFood = gFood-tFood;

document.getElementById("hRt").innerHTML = hRat;
document.getElementById("hBp").innerHTML = hBox;

document.getElementById("wRt").innerHTML = wRat;
document.getElementById("wBp").innerHTML = wBox;

document.getElementById("tFood").innerHTML = tFood.toFixed(2);
document.getElementById("gFood").innerHTML = gFood.toFixed(2);
document.getElementById("nFood").innerHTML = nFood.toFixed(2);