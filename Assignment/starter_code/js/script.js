// Pseudocode:

// User inputs value into input form and clicks submit
// Change body background to the coordinating city "value" chosen
// If NYC/New York/New York City is submitted, change background to .ny
// If SF/San Fran/San Francisco is submitted, change background to .sf
// If LA/Los Angeles is submitted, change background to .la
// If Austin is submitted, change background to .austin
// If Sydney/SYD is submitted, change background to .sydney
// If "city" not recognized, alert "not recognized"


// The Code:
$(document).ready(function(){

// User inputs value into input form and clicks submit
$("#submit-btn").click(getInput);

function getInput() {
	event.preventDefault();
	var input_city = $("input").val();
	changeBackground(input_city);
	$("#city-type").val("");
	// console.log(city);
}
// Change body background to the coordinating city "value" chosen
function changeBackground(city) {
	console.log(city);

// Use so if lowercase is entered computer will recognize city
city = city.toLowerCase() // dont actaully fully understand this concept, read more

// If NYC/New York/New York City is submitted, change background to .ny
if (city == "new york" || city == "nyc" || city == "new york city") { 
 	$("body").attr("class", "nyc");
 }

// if (city == SF || (city == San Fran) || (city = San Francisco) { $("body").attr("class", "sf")}
else if (city == "sf" || city == "san fran" || city == "san francisco") { 
	$("body").attr("class", "sf");
}	
// If LA/Los Angeles is submitted, change background to .la
else if (city == "la" || city == "los angeles") { 
	$("body").attr("class", "la");
}
// If Austin is submitted, change background to .austin
else if (city == "austin") { 
	$("body").attr("class", "austin");
}
// If Sydney/SYD is submitted, change background to .sydney
else if (city == "syd" || city == "sydney") { 
	$("body").attr("class", "sydney");
}
// If "city" not recognized, alert "Invalid city. Try again"
else {
	alert("Invalid city. Try again.");
}

}

});