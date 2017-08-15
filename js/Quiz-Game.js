
var correctAns = 0;
var wrongAns = 0;
var timeLeft = 30;
var	intervalId;

function grade() {
	//Should put in loop 
	if($("#correct1").is(':checked')) {
		correctAns++;	
	} 
	else {
		wrongAns++;
	}

	if($("#correct2").is(':checked')) {
		correctAns++;
	} 
	else {
		wrongAns++;
	}

	if($("#correct3").is(':checked')) {
		correctAns++;	
	} 
	else {
		wrongAns++;
	}

	if($("#correct4").is(':checked')) {
		correctAns++;	
	} 
	else {
		wrongAns++;
	}

	if($("#correct5").is(':checked')) {
		correctAns++;	
	} 
	else {
		wrongAns++;
	}
	console.log(correctAns);
}

function endScreen() {
	grade();
	$("#questionBox").css("display", "none");
	$("#start").css("display", "none");
	$("#timer").css("display", "none");
	$("#endScreen").css("display", "block");
	$("#endScreen").html("You got " + correctAns + " correct and " + wrongAns + " wrong");
}

function run() {
	$("#start").css("display", "none");
	$("#timer").css("display", "block");
	$("#questionBox").css("display", "block");
    intervalId = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(intervalId);
}

function decrement() {

    if(timeLeft > 0) {
	    timeLeft--;
	    $("#timer").html("You have " + timeLeft + " seconds left");
	}
	
	else if(timeLeft === 0) {
		endScreen();
		stop();	
		alert("You're out of time");	
	}

	else {
		return;
	}	
}

$("#start").on("click", run);

$("#done").on("click", endScreen);
 





