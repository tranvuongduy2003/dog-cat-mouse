function Dog() {
	this.stomach = [];
}

Dog.prototype.eat = function(Cat) {
	this.stomach.push(Cat);
};

module.exports = Dog;