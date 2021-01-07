function print() {
    // Table 1
    var rat1 = (document.getElementById("rt1").value)/1; 
    var rat2 = (document.getElementById("rt2").value)/1; 
    var rat3 = (document.getElementById("rt3").value)/1; 
    var rat4 = (document.getElementById("rt4").value)/1; 

    var box1 = (document.getElementById("bp1").value)/1; 
    var box2 = (document.getElementById("bp2").value)/1; 
    var box3 = (document.getElementById("bp3").value)/1; 
    var box4 = (document.getElementById("bp4").value)/1; 

    var shouse = (document.getElementById("sh").value)/1; 
    var ohouse = (document.getElementById("oh").value)/1; 

    hRat = rat1 + rat2 + rat3 + rat4;
    hRat = hRat + ((hRat*shouse)/100);

    hBox = box1 + box2 + box3 + box4;
    hBox = hBox + ((hBox*ohouse)/100);

    wRat = hRat*24*7;
    wBox = hBox*24*7;

    document.getElementById("hRt").innerHTML = hRat.toFixed(2);
    document.getElementById("hBp").innerHTML = hBox.toFixed(2);

    document.getElementById("wRt").innerHTML = wRat.toFixed(2);
    document.getElementById("wBp").innerHTML = wBox.toFixed(2);

    // Table 2
    tFood = wRat+wBox;
    nFood = gFood-tFood;

    document.getElementById("tFood").innerHTML = tFood.toFixed(2);
    if (nFood<=0) {
        nFood = "Goal!"
        document.getElementById("nFood").innerHTML = nFood;
    }
    else {
        document.getElementById("nFood").innerHTML = nFood.toFixed(2);
    }
}