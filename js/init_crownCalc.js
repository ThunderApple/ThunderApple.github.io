var hNOK = 0;
var wNOK = 0;
var sNOK = 0;

document.getElementById("hNOK").innerHTML = hNOK;
document.getElementById("wNOK").innerHTML = wNOK;
document.getElementById("sNOK").innerHTML = sNOK;

var vNOK = 0;

try {
    $.getJSON('https://api.exchangeratesapi.io/latest?base=USD&symbols=NOK', 
    function(json) {
        vNOK = json.rates.NOK;
        vNOK = vNOK.toFixed(2);
        document.getElementById("vNOK").innerHTML = "= " + vNOK;
    });
}
catch {
    document.getElementById("vNOK").innerHTML = '&asymp; 8.56';
}