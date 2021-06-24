function Potency(number,potency){
	numberr = number;
	for(var i = 1; i < potency; i++){
		number *= numberr;
	}
	return number;
}