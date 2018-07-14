let mathMark = 20;
let engMark = 10;
let compMark = 50;
function maxMarks() {
	let numb1=parseInt(document.querySelector("#numb1").value);
	let numb2=parseInt(document.querySelector("#numb2").value);
	let numb3=parseInt(document.querySelector("#numb3").value);
	if (numb1 >= mathMark && numb2 >= engMark && numb3 >= compMark) { 
		alert("pass");
	}else{
		alert("fail");
	}
}
// answer(5,6,7 ka output fail)