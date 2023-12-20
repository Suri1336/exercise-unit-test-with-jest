// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
function fromEuroToDollar(euro) {
let dollar =euro *1.07
return dollar
} 
function fromDollarToYen (dollar){
    let euro = dollar / 1.07
    let yen = euro * 156.5
    return yen 
}
function fromYenToPound (yen) {
    let euro = yen / 156.5
    let pound =euro * 0.87
    return pound
}
module.exports={fromEuroToDollar, fromDollarToYen, fromYenToPound }