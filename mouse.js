function Mouse (name) {
    this.name = name;
    this.isDead = false;
}

Mouse.prototype.die = function () {
    this.isDead = true;
}

Mouse.prototype.die = function () {
    console.log ('Run...');
}

module.exports =  Mouse;
