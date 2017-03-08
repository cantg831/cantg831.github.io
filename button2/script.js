$(document).ready(function(){
// all code goes in here between these:{}

console.log("hi there");

$(".button").on("mouseenter", function() {
	// this is the hover instructions
	$(this).addClass("focused");
});

$(".button").on("mouseleave", function(){
	$(this).removeClass("focused");
});

$(".button").on("click",function(){
	$(this).toggleClass("active");
	$("h1").html();
});

$("h1").on("click", function(){
	$(this).html("Switch");

});




});