var students = [
	"Mark",
	"Damien",
	"Dominic",
	"Milka",
	"Ashley",
	"Robin",
	"Mara",
	"Roger",
	"Mekhi",
	"Mariah",
	"Christian",
	"Savanna",
	"Nolan",
	"Mateo",
	"Kean",
	"Maxwell",
	"Antonio",
	"Celeste",
	"Analicia",
	"Yazmin",
	"Jack",
	"Spencer",
	"Rand",
	"Kylee",
	"Dylan",
	"Sean",
	"Makaela",
	"Tyler",
	"Mr. Stan",
	"Emily",
	"Gabrielle"
];

function pickStudent() {
	var twister = new MersenneTwister();
	document.getElementById('icon').classList.remove('hidden');
	setTimeout(function() {
		document.getElementById('icon').classList.add('hidden');
		document.getElementById('studentName').innerHTML = students[Math.floor(twister.random() * students.length)];
	}, 400);
}