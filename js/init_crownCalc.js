var hNOK = 0;
var wNOK = 0;
var sNOK = 0;

document.getElementById("hNOK").innerHTML = hNOK;
document.getElementById("wNOK").innerHTML = wNOK;
document.getElementById("sNOK").innerHTML = sNOK;

var vNOK = 8.56;
document.getElementById("vNOK").innerHTML = vNOK;
document.getElementById("vNOK").innerHTML = getNOKvalue();

savedValuta = "/support/rates.txt";
editFile = fopen(savedValuta, 3);// opens the file for writing
fwrite(file, vNOK);// str is the content that is to be written into the file.


// execute the conversion using the "convert" endpoint:
function getNOKvalue() {
    // set endpoint and your access key
    endpoint = 'live';
    access_key = 'efb917cc898c936b10a4e64f6a7d734f';

    // define from currency, to currency, and amount
    source = 'USD';
    currencies = 'NOK';
    format = '1';

    $.ajax({
        url: 'http://apilayer.net/api/live?access_key=efb917cc898c936b10a4e64f6a7d734f&currencies=NOK&source=USD&format=1',
        //url: 'http://apilayer.net/api/' + endpoint + '?access_key=' + access_key + '&currencies=' + currencies + '&source=' + source + '&format=' + format,   
        dataType: 'jsonp',
    
        success: function(json) {
            // access the conversion result in json.result
            document.getElementById("vNOK").innerHTML = json.quotes.USDNOK;
        }
    });
}



$.getJSON('http://apilayer.net/api/live?access_key=efb917cc898c936b10a4e64f6a7d734f&currencies=NOK&source=USD&format=1', 
function(json) {
    document.getElementById("vNOK").innerHTML = json.quotes.USDNOK;
});