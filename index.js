var companies = ["Tinder", "Snapchat", "Uber", "Lyft", "Google", "Twitter", "Facebook", "AirBnB", "Apple", "Github", "Amazon", "YouTube", "eBay", "Venmo", "Netflix", "Wikipedia", "Spotify", "Twitch", "Reddit"];
var buzzwords = ["machine learning", "blockchain", "social media", "artificial intelligence", "robotics", "Internet of Things", "music technology", "cloud computing", "big data", "deep learning", "data mining", "microservices", "virtual reality"];


var comp = companies[Math.floor(Math.random()*companies.length)];
var buzz = buzzwords[Math.floor(Math.random()*buzzwords.length)];
var string = "It's like " + comp + " but for " + buzz + ".";
$("h1").text(string);

$("button").click(function() {
	randomize();
});

function randomize() {
	var comp = companies[Math.floor(Math.random() * companies.length)];
	var buzz = buzzwords[Math.floor(Math.random() * buzzwords.length)];
	var string = "It's like " + comp + "<br/> but for " + buzz + ".";
	$("h1").text(string);
}

// randomize();
