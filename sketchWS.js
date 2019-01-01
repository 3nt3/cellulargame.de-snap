var ws = new WebSocket("ws://localhost:8000/");

ws.onmessage = function() {
	doStuffWithTheData(event.data);
	//console.log(event.data);
}

function doStuffWithTheData(stuff) {
	var data = JSON.parse(stuff);
	console.log(data)
} 

function getFood() {
	ws.send(JSON.stringify({type: "getFood"}))
}

function spawnFood() {
	ws.send(JSON.stringify({type: "spawnFood"}))
}