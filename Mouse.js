function Mouse(name, age) {
	this.name = name;
	this.age = age;
	this.dead = false;
}

Mouse.property.die = function() {
	this.dead = true;
}

module.exports = Mouse;