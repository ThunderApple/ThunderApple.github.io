//----------------------------------------------------------
// FUNCTIONS
//----------------------------------------------------------
function calcFood() {
    
    // Table 1
    rat1 = (document.getElementById("rt1").value)/1; 
    rat2 = (document.getElementById("rt2").value)/1; 
    rat3 = (document.getElementById("rt3").value)/1; 
    rat4 = (document.getElementById("rt4").value)/1; 

    box1 = (document.getElementById("bp1").value)/1; 
    box2 = (document.getElementById("bp2").value)/1; 
    box3 = (document.getElementById("bp3").value)/1; 
    box4 = (document.getElementById("bp4").value)/1; 

    shouse = (document.getElementById("sh").value)/1; 
    ohouse = (document.getElementById("oh").value)/1; 

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


function calcTime() {
    pDays = 0;
    pHour = 0;

    rat1 = (document.getElementById("rt1").value)/1; 
    rat2 = (document.getElementById("rt2").value)/1; 
    rat3 = (document.getElementById("rt3").value)/1; 
    rat4 = (document.getElementById("rt4").value)/1; 

    box1 = (document.getElementById("bp1").value)/1; 
    box2 = (document.getElementById("bp2").value)/1; 
    box3 = (document.getElementById("bp3").value)/1; 
    box4 = (document.getElementById("bp4").value)/1; 

    shouse = (document.getElementById("sh").value)/1; 
    ohouse = (document.getElementById("oh").value)/1; 

    gFood = (document.getElementById("gFood").value)/1
    iFood = (document.getElementById('iFood').value)/1;


    hRat = rat1 + rat2 + rat3 + rat4;
    hRat = hRat + ((hRat*shouse)/100);

    hBox = box1 + box2 + box3 + box4;
    hBox = hBox + ((hBox*ohouse)/100);


    hProduction = hRat + hBox;
    document.getElementById("hProd").innerHTML = hProduction.toFixed(2);
    mFood = gFood - iFood;
    document.getElementById("mFood").innerHTML = mFood.toFixed(2);

    
    if (hProduction>0) {
        pHour = mFood/hProduction;
        pDays = parseInt(pHour / 24);

        pHour = (pHour - (pDays*24)).toFixed(0);

        pTime = pDays.toString() + ":" + pHour.toString();
        document.getElementById("pTime").innerHTML = pTime;
    }
}


function calcNOK() {
    ant = (document.getElementById('ant').value)/1;
    sDays = (document.getElementById('seasonTime').value)/1;

    if (ant != 0) {
        hNOK = ant / 24;
        wNOK = ant * 7;
        sNOK = ant * sDays;

        document.getElementById("hNOK").innerHTML = hNOK.toFixed(2);
        document.getElementById("wNOK").innerHTML = wNOK.toFixed(2);
        document.getElementById("sNOK").innerHTML = sNOK.toFixed(2);   
    }
}