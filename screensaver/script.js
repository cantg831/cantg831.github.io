$(document).ready(function() {

	 
	var messageCounter =0;

	setInterval(function(){


		$("h1").addClass("hide");
		$("#wrapper").removeClass("shake")
		setTimeout(function(){
			messageCounter++;
		$("#wrapper").addClass("shake");
		$(".m"+messageCounter).addClass("fade");

		if (messageCounter >= message.length){
		 	counter = 15;
		}


		},800);
		



	},2000);




});


	
// setInterval
// switch over to showing messages, rather than hiding the 8


