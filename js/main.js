var i = 0;
var sum = 0e-2;
var netPlan1 = 9.98;
var total = document.getElementById("total");

function Add() {
	if(i==0)
	{
		sum +=netPlan1;
		i++;
	}
	else{
		sum -=netPlan1;
		i--;
	}
	total.innerHTML = "Suma<br>" + String(sum.toFixed(2)) + " €";
}