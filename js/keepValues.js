// Rat Trap Updates
if (rat1 != 0) {
    document.getElementById("rt1").selectedIndex = rtReverseLookup[rat1];
}
if (rat2 != 0) {
    document.getElementById("rt2").selectedIndex = rtReverseLookup[rat2];
}
if (rat3 != 0) {
    document.getElementById("rt3").selectedIndex = rtReverseLookup[rat3];
}
if (rat4 != 0) {
    document.getElementById("rt4").selectedIndex = rtReverseLookup[rat4];
}

// Box of Plant Updates
if (box1 != 0) {
    document.getElementById("bp1").selectedIndex = bpReverseLookup[box1];
}
if (box2 != 0) {
    document.getElementById("bp2").selectedIndex = bpReverseLookup[box2];
}
if (box3 != 0) {
    document.getElementById("bp3").selectedIndex = bpReverseLookup[box3];
}
if (box4 != 0) {
    document.getElementById("bp4").selectedIndex = bpReverseLookup[box4];
}

// Boosters
if (shouse != 0) {
    document.getElementById("sh").selectedIndex = boostReverseLookup[shouse];
}
if (ohouse != 0) {
    document.getElementById("oh").selectedIndex = boostReverseLookup[ohouse];
}

// Crowns
if (ant != 0) {
    document.getElementById("ant").selectedIndex = crownReverseLookup[ant];
}
if (sDays != 30) {
    document.getElementById("seasonTime").value = sDays;
}