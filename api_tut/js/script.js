$(document).ready(function() {
  var key = "cdca1c51b4d44a91bf7232018171503";
  var url = "https://api.apixu.com/v1/current.json?key=" + key + "&q=24368";

$.getJSON(url,function(data) {

	 console.log(data["current"]["temp_f"]);
	$("#temp").html(data["current"]["temp_f"]);

	

	 console.log(data["current"]["feelslike_f"]);
	 $("#weather").html([data["current"]["feelslike_f"]]);

	 console.log(data["current"]["wind_mph"]);
	 $("#wind").html(data["current"]["wind_mph"]);
});




});




/*
    Get weather API key at
    https://www.apixu.com/signup.aspx
*/