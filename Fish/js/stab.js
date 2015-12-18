var stabObj = function() {

	this.x = [];
	this.y = [];
	this.alive = [];
	this.stabPic = new Image();
	this.spd;
	this.r = 20;
}

stabObj.prototype.num = 30;
stabObj.prototype.init = function() {
	for(var i = 0; i< this.num; i++) {
		this.x[i] = 0;
		this.y[i] = Math.random() * canHeight;
		this.stabPic.src = "./images/stab.png";
		this.alive[i] = false;
		this.spd = 5;
	}
}

stabObj.prototype.draw = function() {
	ctx2.save();
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) {
			this.x[i] += this.spd * deltaTime * 0.03;
			ctx2.drawImage(this.stabPic, this.x[i] - this.stabPic.width/2, this.y[i] - this.stabPic.height/2);
		}
	}
	ctx2.restore();
}

stabObj.prototype.born = function(i) {	
	this.x[i] = Math.random() * canWidth - canWidth;
	this.y[i] = Math.random() * (canHeight - 200) + 200;
	this.alive[i] = true;
}

function stabMonitor() {
	var num = 0;
	for (var i = 0; i < stab.num; i++) {
		if (stab.x[i] > canWidth) {
			stab.alive[i] = false;
		}
		if (stab.alive[i]) {
			num++;
		}
	}
	if (num < 2) {
		sendStab();
		return;
	}
}

function sendStab() {
	for (var i = 0; i < stab.num; i++) {
		if (!stab.alive[i]) {
			stab.born(i);
			return;
		}
	}
}

stabObj.prototype.dead = function(i) {
	this.alive[i] = false;
}
