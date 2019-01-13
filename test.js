var morphs = this.parent.children.filter((morph) => {
	return morph.name == "food"
})[0].instances

morphs.forEach((morph) => {
	if (this.isTouching(morph)) {
		morph.deleteClone();
		wsRequest({type: "eat", data: {id: currentPlayer.id, mealId: foodItems[]}});
	}	
})
