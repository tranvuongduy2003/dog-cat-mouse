var chalk = require('chalk');

function Dog(name) {
	this.stomach = [];
}

Dog.prototype.eat = function(Cat) {
	this.stomach.push(Cat);
};

Dog.prototype.sayHi = function() {
	console.log('Hi everybody, my name is ' + chalk.red(this.name));
};

module.exports = Dog;