var hRat = 0;
var hBox = 0;
var wRat = 0;
var wBox = 0;

var tFood = 0;
var gFood = 10000;
var nFood = gFood-tFood;
var iFood = 0;
var mFood = gFood-iFood;

var pDays = 0;
var pHour = 0;

var pTime = "∞";
var hProduction = 0;

document.getElementById("hRt").innerHTML = hRat;
document.getElementById("hBp").innerHTML = hBox;

document.getElementById("wRt").innerHTML = wRat;
document.getElementById("wBp").innerHTML = wBox;

document.getElementById("tFood").innerHTML = tFood.toFixed(2);
document.getElementById("gFood").innerHTML = gFood.toFixed(2);
document.getElementById("nFood").innerHTML = nFood.toFixed(2);
document.getElementById("mFood").innerHTML = mFood.toFixed(2);

document.getElementById("pTime").innerHTML = pTime;
document.getElementById("hProd").innerHTML = hProduction.toFixed(2);