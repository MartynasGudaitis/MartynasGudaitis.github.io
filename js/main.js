var planIds = ["netPlan1", "netPlan2", "netPlan3", "tvPlan1", "tvPlan2", "tvPlan3"];
var planCosts = [9.98, 12.54, 15.39, 7.32, 3.53, 2.79];
var activePlans = [0, 0, 0, 0, 0, 0];

function AddSubtract(planId, activness){
	var myPlan = document.getElementById(planId);
	if(activness == 0){
		myPlan.className += "activated"; activness++;
	} else {
		myPlan.className -= "activated"; activness--;
	}
	return activness;
}



function WhichOfThreePlans(isActive1, isActive2, isActive3, planId1, planId2, planId3){
	if (isActive1 == 0 && isActive2 == 0 && isActive3 == 0) {
		document.getElementById(planId1).className += "activated";
		isActive1++;
	} else if (isActive1 == 0 && isActive2 == 1 && isActive3 == 0) {
		document.getElementById(planId1).className += "activated"; 
		isActive1++;
		document.getElementById(planId2).className -= "activated"; 
		isActive2--;
	} else if (isActive1 == 0 && isActive2 == 0 && isActive3 == 1) {
		document.getElementById(planId1).className += "activated"; 
		isActive1++;
		document.getElementById(planId3).className -= "activated"; 
		isActive3--;
	}
	return [isActive1, isActive2, isActive3];
}

function Add(_id){
	var sum = 0;
	var total = document.getElementById("total");

	switch (_id) {
	case planIds[0]:
			if (activePlans[0] == 1) {
				document.getElementById(_id).className -= "activated"; activePlans[0]--;
			}
			else{
				var pln = new Array();
				pln = WhichOfThreePlans(activePlans[0], activePlans[1], activePlans[2], planIds[0], planIds[1], planIds[2]);
				activePlans[0] = pln[0];
				activePlans[1] = pln[1];
				activePlans[2] = pln[2];
			}
		break;
	case planIds[1]:
		if (activePlans[1] == 1) {
			document.getElementById(_id).className -= "activated"; activePlans[1]--;
		}
		else{
		var pln = new Array();
		pln = WhichOfThreePlans(activePlans[1], activePlans[0], activePlans[2], planIds[1], planIds[0], planIds[2]);
		activePlans[1] = pln[0];
		activePlans[0] = pln[1];
		activePlans[2] = pln[2];
		}
		break;
	case planIds[2]:
		if (activePlans[1] == 1) {
			document.getElementById(_id).className -= "activated"; activePlans[2]--;
		}
		else{
			var pln = new Array();
			pln = WhichOfThreePlans(activePlans[2], activePlans[1], activePlans[0], planIds[2], planIds[1], planIds[0]);
			activePlans[2] = pln[0];
			activePlans[1] = pln[1];
			activePlans[0] = pln[2];
		}
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
