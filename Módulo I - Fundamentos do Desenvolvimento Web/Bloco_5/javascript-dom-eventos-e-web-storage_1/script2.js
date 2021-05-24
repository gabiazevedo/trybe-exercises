let header = document.getElementById("header-container");
	header.style = "background-color: MediumSeaGreen";

let emergencyTasks = document.querySelectorAll(".emergency-tasks h3");
	for (let index = 0; index < emergencyTasks.length; index += 1) {
			emergencyTasks[index].style = "background-color: magenta"; 
	}

let emergencyTasks2 = document.getElementsByTagName("section");
for (let index = 0; index < emergencyTasks2.length; index += 1) {
		emergencyTasks2[0].style = "background-color: LightSalmon";
}

let noEmergencyTasks = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < noEmergencyTasks.length; index += 1) {
	noEmergencyTasks[index].style = "background-color: black";
}

let noEmergencyTasks2 = document.querySelector(".no-emergency-tasks");
	noEmergencyTasks2.style = "background-color: Goldenrod"

let footer = document.getElementById("footer-container");
	footer.style = "background-color: DarkSlateGray";