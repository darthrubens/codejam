process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";

process.stdin.on("data", function (chunk) {
	input += chunk;
});

process.stdin.on("end", function () {
	solve(input);
});

function solve(input){
	var inputs = input.split('\n');
	var T = parseInt(inputs[0]);
	for(var i = 1; i <= T; i++){
		var line = inputs[i];
		findMinimum(line, i);
	}
}

function findMinimum(line, i){
	var minimum = 0;
	var peopleStanding = 0;
	var people = line.split(' ')[1];

	for(var j = 0; j < people.length; j++){
		var nPeople = parseInt(people[j]);

		if(peopleStanding < j && nPeople > 0){
			var guests = (j - peopleStanding);
			minimum += guests; 
			peopleStanding += guests + nPeople;
			//console.log(guests + ' people invited, ' + peopleStanding + ' people standing');
		}else{
			peopleStanding += nPeople;
			//console.log(peopleStanding + ' people standing');
		}
	}
	console.log('Case #' + i + ': ' + minimum);
}
