const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll(".price");
	let total = 0;

	prices.forEach(cell=> {
		total += parseFloat(cell.textContent);
	})

	const table = document.querySelector("table");
	const newRow = document.createElement("tr");
	const newCell = document.createElement("td");


	newCell.colSpan = 2; 
    newCell.textContent = `Total Price: Rs ${total}`;
    newCell.style.fontWeight = "bold";

    newRow.appendChild(newCell);
    table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

