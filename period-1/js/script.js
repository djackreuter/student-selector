var students = [
	"Gabriel",
	"Paola",
	"Madison",
	"Julian",
	"Andrea",
	"Paige",
	"Edwin",
	"Ethan",
	"Skylar",
	"Jayce",
	"Jacob G.",
	"Jody",
	"Michael",
	"Steiveann",
	"Sabrina",
	"Dylan",
	"Noel",
	"Karissa",
	"Casey",
	"Matthew",
	"Nicholas",
	"Abraham",
	"Nevaeh",
	"Jaiden",
	"Lexiana",
	"Stephen",
	"Liam",
	"Audrey",
	"Joshua",
	"Brigette",
	"Mr. Stan",
	"Ryan",
	"Jacob F."
];


function pickStudent() {
	var twister = new MersenneTwister();
	document.getElementById('icon').classList.remove('hidden');
	setTimeout(function() {
		document.getElementById('icon').classList.add('hidden');
		document.getElementById('studentName').innerHTML = students[Math.floor(twister.random() * students.length)];
	}, 400);
}


