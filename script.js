//Tip Calculator

function findTip(){
	let bill = mealForm.bill.value;
	let percentage = mealForm.tipPercent.value;
	const tipAmount = document.getElementById('tipAmount');
	const totalAmount = document.getElementById('totalAmount');
	let convert = Number(percentage)/100;

	let tipDollars = Number(bill) * convert;
	let grandTotal = Number(bill) + tipDollars;

	tipAmount.innerHTML = 'Tip Amount: $' + tipDollars;
	totalAmount.innerHTML = 'Total Amount: $' + grandTotal;
}