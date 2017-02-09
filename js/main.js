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
		isActive1++;
	} else if (isActive1 == 0 && isActive2 == 1 && isActive3 == 0) {
		document.getElementById(planId1).className += "active"; 
		isActive1++;
		document.getElementById(planId2).className -= "active"; 
		isActive1--;
	} else if (isActive1 == 0 && isActive2 == 0 && isActive3 == 1) {
		document.getElementById(planId1).className += "active"; 
		isActive1++;
		document.getElementById(planId3).className -= "active"; 
		isActive3--;
	}
}

function Add(_id){
	var sum = 0;
	var total = document.getElementById("total");

	switch (_id) {
	case planIds[0]:
		WhichOfThreePlans(activePlans[0], activePlans[1], activePlans[2], planIds[0], planIds[1], planIds[2]);
		break;
	case planIds[1]:
		WhichOfThreePlans(activePlans[1], activePlans[0], activePlans[2], planIds[1], planIds[0], planIds[2]);
		break;
	case planIds[2]:
		WhichOfThreePlans(activePlans[2], activePlans[1], activePlans[0], planIds[2], planIds[1], planIds[0]);
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
	for (var i = 1; i <= activePlans.length; i++) {
		if(activePlans[i] == 1 )
			sum += planCosts[i];
	}
	total.innerHTML = "Suma<br>" + String(sum.toFixed(2)) + " €";
}
