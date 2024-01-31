var companiesWithColor = [
	{ name: "AirBnB", color: "#FF5A5F", textColor: "#484848" },
	{ name: "Amazon", color: "#FF9900", textColor: "#000000"},
	{ name: "Apple", color: "#000000", textColor: "#FFFFFF"},
	{ name: "ChatGPT", color: "#10A37F", textColor: "#FFFFFF"},
	{ name: "eBay", color: "#FFFFFF", textColor: "#E53238"},
	{ name: "Facebook", color: "#4267B2", textColor: "#FFFFFF" },
	{ name: "GitHub", color: "#FFFFFF", textColor: "#000000"},
	{ name: "Google", color: "#4285F4", textColor: "#FFFFFF" },
	{ name: "LinkedIn", color: "#0077B5", textColor: "#FFFFFF" },
	{ name: "Lyft", color: "#FF00BF", textColor: "#FFFFFF" },
	{ name: "Microsoft", color: "#7FBA00", textColor: "#FFFFFF" },
	{ name: "Netflix", color: "#FFFFFF", textColor: "#E50914" },
	{ name: "OpenAI", color: "#000000", textColor: "#FFFFFF" },
	{ name: "Reddit", color: "#FFFFFF", textColor: "#FF5700" },
	{ name: "Robinhood", color: "#002615", textColor: "#C3F53C" },
	{ name: "Slack", color: "#4A154B", textColor: "#FFFFFF" },
	{ name: "Snapchat", color: "#FFFC00", textColor: "#000000"},
	{ name: "Spotify", color: "#1DB954", textColor: "#FFFFFF"},
	{ name: "StackOverflow", color: "#FFFFFF", textColor: "#222426"},
	{ name: "TikTok", color: "#000000", textColor: "#00F2EA"},
	{ name: "Tinder", color: "#FFFFFF", textColor: "#FE3C72"},
	{ name: "Twitch", color: "#9146FF", textColor: "#FFFFFF"},
	{ name: "Twitter", color: "#1DA1F2", textColor: "#FFFFFF"},
	{ name: "Uber", color: "#FFFFFF", textColor: "#000000"},
	{ name: "Venmo", color: "#FFFFFF", textColor: "#008CFF"},
	{ name: "Wikipedia", color: "#FFFFFF", textColor: "#000000"},
	{ name: "YouTube", color: "#FFFFFF", textColor: "#FF0000"},
];

var buzzwords = ["machine learning", "blockchain", "social media", "AI", "robotics", "Internet of Things", "music technology", "cloud computing", "big data", "deep learning", "data mining", "virtual reality", "cryptocurrency", "quant trading", "LLMs", "data lakes", "DevSecOps", "AR", "self driving"];

function randomize() {
	var comp = companiesWithColor[Math.floor(Math.random() * companiesWithColor.length)];
	var buzz = buzzwords[Math.floor(Math.random() * buzzwords.length)];

	document.getElementById("company").textContent = comp.name;
    document.getElementById("technology").textContent = buzz;

	document.body.style.backgroundColor = comp.color;
	document.getElementsByClassName('full')[0].style.color = comp.textColor;
}

document.addEventListener('DOMContentLoaded', function() {
    randomize();
});
document.body.addEventListener('click', function() {
    randomize();
});
document.body.addEventListener('keypress', function() {
    randomize();
});
