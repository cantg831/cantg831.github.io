$(document).ready(function() {

	
	var numOfBalloons = 50;
	var popCount = 0;




	for(var i=0; i<numOfBalloons; i++){
		$("#balloon-container").append("<div class='balloon'></div>");
		if(i % 2 === 0){
			$(".balloon").last().addClass("big");
		}

	}

var audio = new Audio("pop.m4a");
	$(".balloon").on("mouseenter",function() {
		$(this).addClass("popped");
		audio.play();
		popCount = popCount + 1;
		$("#pop-target").html(popCount);

		//check did the user pop all the balloons?
		if(popCount === numOfBalloons){
			$("#bar").html("YOU WON!");



		} 
		/*else if  (popCount ===5){
			alert("Keep Going!");
		}
		else{
			console.log("Not done yet.")
		}*/



		

	});












});