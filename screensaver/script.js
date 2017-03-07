$(document).ready(function() {


$("#ball").on("shake", function(){
	$(this).addClass("focused");
	$("h1").addClass("hidden");
	
});

$("#ballcenter").on("hidden", function(){
	$(this).removeClass("h1");
});

$("#ballcenteractive").on("active", function(){
	$("p").addClass("show");
});







// setInterval
// switch over to showing messages, rather than hiding the 8


































});
