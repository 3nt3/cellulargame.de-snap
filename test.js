var morphs = this.parent.children.filter((morph) => {
	return morph.name == "food"
})[0].instances

morphs.forEach((morph) => {
	var mealId = morph.variables.vars.id.value;
	if (this.isTouching(morph)) {
		morph.deleteClone();
		wsRequest({type: "eat", data: {id: currentPlayer.id, mealId: foodItems[mealId]}});
	}	
})
