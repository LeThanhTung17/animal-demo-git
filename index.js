var Dog = require('./Dog');
var Cat = require('./Cat');
var Mouse = require('./Mouse');

var dog = new Dog("Tom");
var cat = new Cat('Meo');
var mouse = new Mouse('Mickey');

cat.eat(mouse);
dog.sayHi()
dog.eat(cat);
console.log(cat)
console.log(dog)