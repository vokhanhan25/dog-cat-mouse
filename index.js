var Dog = require ('./dog');
var Cat = require ('./cat');

var dog = new Dog ('Lucky');
var tom = new Cat ();

dog.eat(tom);
console.log (dog);
