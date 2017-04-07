$(document).ready(function() {

  var urls=["http://api.urbandictionary.com/v0/define?term=timbs","http://api.urbandictionary.com/v0/define?term=dead ass","http://api.urbandictionary.com/v0/define?term=good looks","http://api.urbandictionary.com/v0/define?term=yurp","http://api.urbandictionary.com/v0/define?term=fugetaboutit"];
  var url2="http://api.urbandictionary.com/v0/define?term=dead ass";
  var url3="http://api.urbandictionary.com/v0/define?term=good looks";
  var url4="http://api.urbandictionary.com/v0/define?term=yurp";
  var url5="http://api.urbandictionary.com/v0/define?term=fugetaboutit";
  var click=0;



 

 $("button").on("click",function(){
 	click++
 	var number=$(this).attr("data-num");
 	// $(data["list"][0]["definition"]);
 	$.getJSON(urls[number],function(data) {
 		$(".definition").html(data["list"][0]["definition"]);

 		if (click===2) {

 			$(".gif"+ number).addClass("show")
 		}

 	console.log(data["list"][0]["definition"]);

 });

 // $("button").onClick(data["list"][0]["definition"]);





 });

	 
});
