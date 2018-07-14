let maxSpeed = 60;
let mySpeed = 40;
function carSpeed(){
	let firstName = document.querySelector("input").value;
	if (mySpeed > maxSpeed) {
		alert("OVERSPEEDING");
    } else {
	    alert("NOT");
    }
}
// answer(15 ka output NOT)