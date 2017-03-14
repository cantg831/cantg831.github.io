$(document).ready(function() {

	var messages = $(".message");
	
	var messageCounter =0;

	setInterval(function(){
		 $(".message").html(messages[messageCounter]);

		messageCounter++;

		if(messageCounter >= messages.length){
			counter = 0;
	 	}


	}, 5000);





});


	
// setInterval
// switch over to showing messages, rather than hiding the 8


