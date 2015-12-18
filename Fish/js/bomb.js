var bombObj = function() {

	this.upx = [];
	this.upy = [];
	this.alive = [];
	this.bombPic = new Image();
	this.spd;
	this.r = 20;
}

bombObj.prototype.num = 30;
bombObj.prototype.init = function() {
	for(var i = 0; i< this.num; i++) {
		this.upx[i] = Math.random() * canWidth;
		this.upy[i] = 0;
		this.bombPic.src = "./images/bomb.png";
		//this.bombPic[i] = "./images/baby.png";
		this.alive[i] = false;
		this.spd = 3;
	}
}

bombObj.prototype.draw = function() {
	ctx2.save();
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) {
			this.upy[i] += this.spd * deltaTime * 0.04;
			ctx2.drawImage(bombPic, this.upx[i] - bombPic.width/2, this.upy[i] - bombPic.height/2);
		}
	}
	ctx2.restore();
}

bombObj.prototype.born = function(i) {	
	this.upx[i] = Math.random() * canWidth;
	this.upy[i] = Math.random() * canHeight - canHeight;
	this.alive[i] = true;
}

function bombMonitor() {
	var num = 0;
	for (var i = 0; i < bomb.num; i++) {
		if (bomb.upy[i] > canHeight) {
			bomb.alive[i] = false;
		}
		if (bomb.alive[i]) {
			num++;
		}
	}
	if (num < 4) {
		sendBomb();
		return;
	}
}

function sendBomb() {
	for (var i = 0; i < bomb.num; i++) {
		if (!bomb.alive[i]) {
			bomb.born(i);
			return;
		}
	}
}

bombObj.prototype.dead = function(i) {
	this.alive[i] = false;
}
