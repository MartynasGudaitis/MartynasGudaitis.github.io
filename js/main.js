var planIds = ["netPlan1", "netPlan2", "netPlan3", "tvPlan1", "tvPlan2", "tvPlan3"];
var planCosts = [9.98, 12.54, 15.39, 7.32, 3.53, 2.79];
var activePlans = [0, 0, 0, 0, 0, 0];

function AddSubtract(planId, activness){
	var myPlan = document.getElementById(planId);
	if(activness == 0){
		myPlan.className += "active"; activness++;
	} else {
		myPlan.className -= "active"; activness--;
	}
	return activness;
}

function WhichOfThreePlans(isActive1, isActive2, isActive3, planId1, planId2, planId3){
	if (isActive1 == 0 && isActive2 == 0 && isActive3 == 0) {
		document.getElementById(planId1).className += "active";
		console.log('all were equal to zero'); 
		isActive1++;

	} else if (isActive1 == 0 && isActive2 == 1 && isActive3 == 0) {
		document.getElementById(planId1).className += "active"; 
		isActive1++;
		document.getElementById(planId2).className -= "active"; 
		isActive2--;
		console.log('isActive2 was active. isActive1 ' + isActive1 + ' isActive2 ' + isActive2);
	} else if (isActive1 == 0 && isActive2 == 0 && isActive3 == 1) {
		document.getElementById(planId1).className += "active"; 
		isActive1++;
		document.getElementById(planId3).className -= "active"; 
		isActive3--;
		console.log('isActive3 was active. isActive1 ' + isActive1 + ' isActive3 ' + isActive3);
	}
	return [isActive1, isActive2, isActive3];
}

function Add(_id){
	var sum = 0;
	var total = document.getElementById("total");

	switch (_id) {
	case planIds[0]:
		var pln = new Array();
		pln = WhichOfThreePlans(activePlans[0], activePlans[1], activePlans[2], planIds[0], planIds[1], planIds[2]);
		for(var i = 0; i <=2; i++)
			activePlans[i] = pln[i];
		break;
	case planIds[1]:
		var pln = new Array();
		pln = WhichOfThreePlans(activePlans[1], activePlans[0], activePlans[2], planIds[1], planIds[0], planIds[2]);
		activePlans[1] = pln[0];
		activePlans[0] = pln[1];
		activePlans[2] = pln[2];
		break;
	case planIds[2]:
		var pln = new Array();
		pln = WhichOfThreePlans(activePlans[2], activePlans[1], activePlans[0], planIds[2], planIds[1], planIds[0]);
		activePlans[2] = pln[0];
		activePlans[1] = pln[1];
		activePlans[0] = pln[2];
		break;
	case planIds[3]:
		activePlans[3] = AddSubtract(planIds[3], activePlans[3]);
		break;
	case planIds[4]:
		activePlans[4] = AddSubtract(planIds[4], activePlans[4]);
		break;
	case planIds[5]:
		activePlans[5] = AddSubtract(planIds[5], activePlans[5]);
		break;
	default:
		console.log('Some kind of error.');
		break;
	}
	for (var i = 0; i <= activePlans.length-1; i++) {
		console.log(activePlans.toString());
		if(activePlans[i] == 1 )
			sum += planCosts[i];
	}
	total.innerHTML = "Suma<br>" + String(sum.toFixed(2)) + " €";
}
