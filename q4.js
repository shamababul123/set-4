let apple=10;
let banana=15;
let mango=8;
let noOfApple;
let noOfBanana;
let noOfMango;
function costCalculate() {
	  noOfApple= parseInt(document.querySelector("#apple").value);
	  noOfBanana= parseInt(document.querySelector("#banana").value);
      noOfMango= parseInt(document.querySelector("#mango").value);
      let totalCost = noOfApple * apple + noOfBanana * banana + noOfMango * mango;
      alert(totalCost);
	
}
// answer(1+1+1 ka output 33)
