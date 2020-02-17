var Dog = require('./Dog.js');
var Cat = require('./Cat.js');

var dog = new Dog('Bull');
var cat = new Cat('Tom');

dog.eat(cat);

console.log(dog);