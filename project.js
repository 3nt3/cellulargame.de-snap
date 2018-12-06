
function spawnFood() {
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "https://api.niels-dingsbums.de/spawnFood", false);
	xhttp.send();
 	var json = JSON.parse(xhttp.responseText);
 	var food = [];
 	for (var i = 0; i < json.length; i++) {
  		food.push(Object.values(json[i]));
 	}
 	// console.log(JSON.stringify(food));
	return JSON.stringify(food);
}

function getFood() {
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "https://api.niels-dingsbums.de/getFood", false);
	xhttp.send();
	return xhttp.responseText;
}

function getCells() {
	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", "https://api.niels-dingsbums.de/getCells", false);
	xhttp.send();
	return xhttp.responseText;
}

function initCell(name) {
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "https://api.niels-dingsbums.de/initCell", false);
	xhttp.send(JSON.stringify(name));
	return xhttp.responseText;
}

function eat(id) {
	var xhttp = new XMLHttpRequest;
	xhttp.open("POST", "https://api.niels-dingsbums.de/eat");
	xhttp.send(JSON.stringify(id));
}

function updateSize(id, size) {
	var xhttp = new XMLHttpRequest;
	xhttp.open("POST", "https://api.niels-dingsbums.de/updateSize/"+id, false);
	xhttp.send(id.toString());
}
