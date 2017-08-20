var students = [

]

function pickStudent() {
	var twister = new MersenneTwister();
	document.getElementById('icon').classList.remove('hidden');
	setTimeout(function() {
		document.getElementById('icon').classList.add('hidden');
		document.getElementById('studentName').innerHTML = students[Math.floor(twister.random() * students.length)];
	}, 400);
}