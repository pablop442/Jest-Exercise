// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};
// 1) From Euro to Dollar
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
};

// we include fromEuroToDollar here as well because it needs to be exported


//-------------------------------
//2) From Dollar to Yen

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to Yen
    let valueInYen = valueInDollar * 127.9;
    //return the Yen value
    let rounding = valueInYen.toFixed(2);
    return  parseFloat(rounding);
};
// we include fromEuroToDollar here as well because it needs to be exported


//--------------------------------
//Fron Yen to Pound

const fromYenToPound = function(valueInYen){
    // convert the given valueInPound to Yen
    let valueInPound = valueInYen * 0.8;
    //return the Yen value
    return valueInPound
};
// we include fromYenToPound here as well because it needs to be exported
module.exports = { oneEuroIs, fromYenToPound, fromDollarToYen, fromEuroToDollar }