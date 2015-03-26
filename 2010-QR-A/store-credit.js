process.stdin.resume();
process.stdin.setEncoding("ascii");

var input = "";

process.stdin.on("data", function (chunk) {
	input += chunk;
});

process.stdin.on("end", function () {
	solve();
});

function solve(){
	var lines = input.split('\n');
	var N = lines[0];
	for(var i = 0; i < N; i++){
		var credit = lines[i*3 + 1];
		var items = lines[i*3 + 3].split(' ');		
		var pos = getPositions(items, credit);

		console.log('Case #' + (i+1) + ': ' + pos[0] + ' ' + pos[1]);
	}
}

function getPositions(items, credit){
	var m = items.length;
	for(var i = 0; i < m; i++){
		for(var j = i + 1; j < m; j++){
			var a = parseInt(items[i]);
			var b = parseInt(items[j]);
			if(a + b == credit){
				return [(i+1), (j+1)];
			}
		}
	}
}
