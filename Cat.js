function Cat() {
	this.stomach = [];
}

Cat.prototype.eat = function(Mouse) {
	this.stomach.push(Mouse);
}

module.exports = Cat;