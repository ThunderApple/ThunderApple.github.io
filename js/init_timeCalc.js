var iFood = 0;

var gFood = 10000;
var mFood = gFood-iFood;
var pTime = "∞";
var hProduction = 0;

document.getElementById("gFood").innerHTML = gFood.toFixed(2);
document.getElementById("mFood").innerHTML = mFood.toFixed(2);
document.getElementById("pTime").innerHTML = pTime;
document.getElementById("hProd").innerHTML = hProduction.toFixed(2);


var cYear = (new Date()).getFullYear();
document.getElementById("copyYear").innerHTML = cYear;