$(document).ready(function() {
  var url = "http://api.urbandictionary.com/v0/define?term=timbs";
  // var url="http://api.urbandictionary.com/v0/define?term=dead ass";
  // var url="http://api.urbandictionary.com/v0/define?term=good looks";
  // var url="http://api.urbandictionary.com/v0/define?term=wavy";
  // var url="http://api.urbandictionary.com/v0/define?term=brick";
  // var url="http://api.urbandictionary.com/v0/define?term=chop cheese";

$.getJSON(url,function(data) {

 console.log(data["list"][0]["definition"]);

 $(".definition").html(data["list"][0]["definition"]);

 $("button").on("click",function(){
 	$(data["list"][0]["definition"]);

 });

 // $("button").onClick(data["list"][0]["definition"]);





 });

	 
});
