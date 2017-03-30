$(document).ready(function() {
  var url = "http://api.urbandictionary.com/v0/define?term=";

$.getJSON(url,function(data) {

	 console.log(data["define"]["word"]);
	$("#word").html(data["definition"]["example"]);
