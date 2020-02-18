var Mouse = require('./Mouse.js');

function Cat(name) {
	this.stomach = [];
}

Cat.prototype.eat = function(animal) {
	if (animal instanceof Mouse) {
		this.stomach.push(animal);
		animal.die();
	} else {
		throw new Error('Cat can only eat mouse');
	}
};

module.exports = Cat;