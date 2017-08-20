var students = [
	"Reaghan",
	"Katriel",
	"Austin",
	"Autumn",
	"Emily",
	"Lorenzo",
	"Kaia",
	"Asjann",
	"Gabriel",
	"Rio",
	"Zoe",
	"Eric",
	"Taylor",
	"Dakota",
	"Kara",
	"Natalie",
	"Julia",
	"Breanna",
	"Ana",
	"Bryce",
	"Alyssa",
	"Aya",
	"Brenna",
	"Emma",
	"Mr. Stan"
];

function pickStudent() {
	var twister = new MersenneTwister();
	document.getElementById('icon').classList.remove('hidden');
	setTimeout(function() {
		document.getElementById('icon').classList.add('hidden');
		document.getElementById('studentName').innerHTML = students[Math.floor(twister.random() * students.length)];
	}, 400);
}