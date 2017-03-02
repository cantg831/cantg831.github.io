$(document).ready(function() {

	var popCount = 0;

	$(".balloon").on("click",function() {
		$(this).addClass("popped");
		popCount = popCount + 1;
		$("#pop-target").html(popCount);

		//check did the user pop all the balloons?
		if(popCount === 7){
			$("#bar").html("YOU WON!");

		} 
		else if  (popCount ===5){
			alert("Keep Going!");
		}
		else{
			console.log("Not done yet.")
		}

		
	});












});