function Cat() {

}

Cat.prototype.eat = function(Mouse) {
	this.stomach.push(Mouse);
}

module.exports = Cat;