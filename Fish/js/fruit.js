var fruitObj = function() {
	this.alive = [];
	this.x = [];
	this.y = [];
	this.l = [];
	this.spd = [];
	this.type = [];
	this.aneNO = [];
	this.orange = new Image();
	this.blue = new Image();
	this.aneID = [];
}

fruitObj.prototype.num = 30;
fruitObj.prototype.init = function() {
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.spd[i] = Math.random() * 0.05;
		this.l[i] = 0;
		this.aneNO[i] = 0;
		this.type[i] = "";
		this.aneID[i] = -1;
	}
	this.orange.src = "./images/fruit.png";
	this.blue.src = "./images/blue.png";
}

fruitObj.prototype.draw = function() {
	for (var i = 0; i < this.num; i++) {
		
		if (this.alive[i]) {
			if (this.l[i]<=18) {
				this.l[i] += this.spd[i] * deltaTime;
				this.x[i] = ane.headx[this.aneNO[i]];
				this.y[i] = ane.heady[this.aneNO[i]];
			} else {
				this.y[i] -= this.spd[i] * deltaTime * 4;
			}
			if (this.type[i] == "orange") {
				ctx2.drawImage(this.orange, this.x[i] - this.l[i]/2, this.y[i] - this.l[i]/2, this.l[i], this.l[i]);
			} else {
				ctx2.drawImage(this.blue, this.x[i] - this.l[i]/2, this.y[i] - this.l[i]/2, this.l[i], this.l[i]);
			}
		}

		if (this.y[i] < -5) {
			this.alive[i] = false;
		}
	}
	
}

fruitObj.prototype.born = function(i) {
	this.aneNO[i] = Math.floor(Math.random() * ane.num);
	
	this.l[i] = 0;
	this.alive[i] = true;
	
	var t = Math.random();
	if(t < 0.2) {
		this.type[i] = "blue";
	} else {
		this.type[i] = "orange";
	}
}


fruitObj.prototype.dead = function(i) {
	this.alive[i] = false;
}

function fruitMonitor() {
	var num = 0;
	for (var i = 0; i < fruit.num; i++) {
		if (fruit.alive[i]) {
			num++;
		}
	}
	if (num < 12) {
		sendFruit();
		return;
	}
}

function sendFruit() {
	for (var i = 0; i < fruit.num; i++) {
		if (!fruit.alive[i]) {
			fruit.born(i);
			return;
		};
	};
}