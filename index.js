var companies = ["Tinder", "Snapchat", "Uber", "Lyft", "Google", "Twitter", "Facebook", "AirBnB", "Apple", "Github", "Amazon", "YouTube", "eBay", "Venmo", "Netflix", "Wikipedia", "Spotify", "Twitch", "Reddit", "Microsoft", "LinkedIn", "Slack"];
var buzzwords = ["machine learning", "blockchain", "social media", "AI", "robotics", "Internet of Things", "music technology", "cloud computing", "big data", "deep learning", "data mining", "virtual reality", "cryptocurrency", "quant trading"];

$("body").click(function() {
	randomize();
}).keypress(function(e) {
	randomize();
});

function randomize() {
	var comp = companies[Math.floor(Math.random() * companies.length)];
	$("#company").html(comp);
	var buzz = buzzwords[Math.floor(Math.random() * buzzwords.length)];
	$("#technology").html(buzz);
	// var string = "It's like <br><strong>" + comp + ",</u><br> but for <br><u>" + buzz + "</u>";

	$("h1").html(string);
}

randomize();
