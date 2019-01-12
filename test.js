food.forEach((item) => {
	createClone(item, this);
})

function createClone(item, morph) {
	var clone = morph.createClone(true);
	clone.gotoXY(clone.pos);
	
	const values = [5, 10, 20];
	var id;
	values.forEach((value, index) => {
		if (item.value == value) {
			id = index;
		}
	})
	
	const sizes = [5, 8, 12];
	clone.setScale(sizes[id]);

	clone.doSwitchToCostume(id);

	clone.show();
}
