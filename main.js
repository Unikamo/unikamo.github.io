function math() {
	
	const button = document.getElementById("mathButton");
	const output = document.getElementById("output");
	const buttonValue = button.value;
	const input = document.getElementById("math");
	const inputValue = input.value
	
	let date = inputValue;
	let dateSplit = date.split(",")
	
	let day = parseInt(dateSplit[0]);
	let month = parseInt(dateSplit[1]);
	let year = parseInt(dateSplit[2]);
	const days = ["Monday", "Tuesday", "Wednesday", "Saturday", "Friday", "Saturday", "Sunday"];
	
	console.log(inputValue);
	console.log(dateSplit)
	console.log("=============");
	console.log(day);
	console.log(month);
	console.log(year);
	console.log("=============");
	output.innerHTML = input.value;
	console.log("Value changed!");
	
	// Math.floor

	let month1d = month +1;
	let result1 = (day + (13 * month1d / 5));
	let result2 = Math.floor((result1 + 21 + 5 + 5 - 10) % 7);
	console.log(result1);
	console.log(result2);
	let final = `${days[result2]} (${result2})`;
	output.innerHTML = final;
	
	/* 
	* Take input
	* Log
	* Make inputs into different variables
	* Calculate the inputs using the formula
	* Log the output
	* Change <p>.value 
	*/

}

typeText();
