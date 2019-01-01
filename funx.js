
/*
Example usage: 
setVelo(45, 1);
==> ["0.707", "0.707"]
*/

function setVelo(angle, speed) {
	var velo = [(-Math.sin(angle * Math.PI / 180)*speed).toFixed(3), (-Math.cos(angle * Math.PI / 180)*speed).toFixed(3)];
	return new List(velo);
}

/*
Example usage:
getDist([45, 1], [100, 43])
*/

function getDist(center, pos) {
	var a = center[0] - pos[0];
	var b = center[1] - pos[1];
	return Math.sqrt(a*a + b*b)
}