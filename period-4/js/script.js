var students = [
	"Leo",
	"Shea",
	"Joseph",
	"Kaelyn",
	"Sarah",
	"Carena",
	"Maxwell",
	"Lillian",
	"Michael",
	"Arianna",
	"Lori",
	"Alyssa",
	"Evangeline",
	"Hannah",
	"Anna",
	"India",
	"Ella",
	"Morgan",
	"Laurie",
	"Sydney",
	"Trevor",
	"Jazmyn",
	"Aracely",
	"Ashley",
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