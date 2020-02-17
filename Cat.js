function Cat(name) {
	this.stomach = [];
	this.name = name;
}

Cat.prototype.eat = function(Mouse) {
	this.stomach.push(Mouse);
}

module.exports = Cat;