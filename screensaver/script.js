$(document).ready(function() {

	var message 
	var messageCounter =0;

	setInterval(function(){
		$("#message-target".html(message[messageCounter]));
		messageCounter++;

		if (messageCounter >= message.length){
		 	counter = 0;
		}


	});


function updateAll() {

	$("#message-target").html(message[messageCounter]);
		messageCounter++;

	if (messageCounter === message.length){
		messageCounter =0;
	}
}


});


	
// setInterval
// switch over to showing messages, rather than hiding the 8


