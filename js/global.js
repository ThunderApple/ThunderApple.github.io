var cYear = (new Date()).getFullYear();
document.getElementById("copyYear").innerHTML = cYear;

//------------------------------------------------------
// GLOBAL VARIABLES
//------------------------------------------------------
var rat1 = 0;
var rat2 = 0;
var rat3 = 0;
var rat4 = 0;

var box1 = 0;
var box2 = 0;
var box3 = 0;
var box4 = 0;

var shouse = 0;
var ohouse = 0; 

var ant = 0;
var sDays = 30;
//------------------------------------------------------
// SET VALUES
//------------------------------------------------------
// Rat Traps:
const rtReverseLookup = {
    0  : 0,
    2  : 1,
    2.3: 2,
    2.7: 3,
    3  : 4,
    3.3: 5,
    3.7: 6,
    4  : 7,
    4.3: 8,
    4.7: 9,
    5  : 10,
    6  : 11,
    7  : 12,
    8  : 13,
}
// Box of Plant
const bpReverseLookup = {
    0   : 0,
    1   : 1,
    1.25: 2,
    1.5 : 3,
    1.75: 4,
    2   : 5,
    2.25: 6,
    2.5 : 7,
    2.75: 8,
    3   : 9,
    3.25: 10,
    3.5 : 11,
    3.75: 12,
    4   : 13,
}
// BoosterHouse
const boostReverseLookup = {
    0 : 0,
    5 : 1,
    7 : 2,
    10: 3,
    12: 4,
    15: 5,
    18: 6,
    20: 7,
    23: 8,
    25: 9,
    28: 10,
    32: 11,
    36: 12,
    40: 13,
}
// Crowns
const crownReverseLookup = {
    0 : 0,
    0 : 1,
    0 : 2,
    3.88: 3,
    4.12: 4,
    4.36: 5,
    4.61: 6,
    4.85: 7,
    5.09: 8,
    5.33: 9,
    5.58: 10,
    5.82: 11,
    6.06: 12,
    6.54: 13,
}