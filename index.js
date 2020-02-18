var Dog = require('./Dog.js');
var Cat = require('./Cat.js');
var Mouse = require('./Mouse.js')

var cat = new Cat();
var mouse = new Mouse('Mickey');
var dog = new Dog();

cat.eat(mouse);

console.log(cat);

try {
	cat.eat(dog);
} catch (error) {
	console.log('Error while cat eating the dog');
}