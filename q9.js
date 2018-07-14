function addCalculate() {
	let numb1 = parseInt(document.querySelector("#numb1").value);
	let numb2 = parseInt(document.querySelector("#numb2").value);
	alert("The sum is" + (numb1+numb2));
}
function diffCalculate() {
	let numb1 = parseInt(document.querySelector("#numb1").value);
	let numb2 = parseInt(document.querySelector("#numb2").value);
	alert("The diff is" + (numb1-numb2));
}
function multCalculate() {
	let numb1 = parseInt(document.querySelector("#numb1").value);
	let numb2 = parseInt(document.querySelector("#numb2").value);
	alert("The mult is" + (numb1*numb2));
}
function divCalculate() {
	let numb1 = parseInt(document.querySelector("#numb1").value);
	let numb2 = parseInt(document.querySelector("#numb2").value);
	alert("The div is" + (numb1/numb2));
}
function remCalculate() {
	let numb1 = parseInt(document.querySelector("#numb1").value);
	let numb2 = parseInt(document.querySelector("#numb2").value);
	alert("The rem is" + (numb1%numb2));
}
// answer(2+2 ka output 4)
// answer(2-2 ka output 0)
// answer(2*2 ka output 4)
// answer(2/2 ka output 1)
// answer(2%2 ka output 0)