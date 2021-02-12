var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ******///

let cal1 = dollarToEuro(137);
let yen = euroToYen(cal1);

console.log(yen);
