//Tip Calculator

function findTip(){
	let bill = mealForm.bill.value;
	let percentage = mealForm.tipPercent.value;
	const tipAmount = document.getElementById('tipAmount');
	const totalAmount = document.getElementById('totalAmount');
	let convert = Number(percentage)/100;
//converts bill variable from a string to a number, and then to a percentage

	let tipDollars = Number(bill) * convert;
	let grandTotal = Number(bill) + tipDollars;

	tipAmount.innerHTML = 'Tip Amount: $' + tipDollars.toFixed(2);
	totalAmount.innerHTML = 'Total Amount: $' + grandTotal;
}