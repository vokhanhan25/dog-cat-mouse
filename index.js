var Cat = require ('./cat');
var Mouse = require ('./mouse');
var Dog = require ('./dog');

var cat = new Cat ();
var mouse = new Mouse ('Mickey');
var dog = new Dog ();

try {
    cat.eat(dog);
} catch (error) {
    console.log ('Error while Cat eating Dog');
}
console.log (cat);
