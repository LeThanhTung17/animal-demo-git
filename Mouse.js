function Mouse(name, age) {
	this.name = name;
	this.age = age;
	this.isDead = false;
}

Mouse.prototype.die = function() {
	this.isDead = true;
};

module.exports = Mouse;