var waveObj = function() {
	this.alive = [];
	this.x = [];
	this.y = [];
	this.r = [];
	this.type = [];
}

waveObj.prototype.num = 10;

waveObj.prototype.init = function() {
	for(var i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.r[i] = 20;
	}
}

waveObj.prototype.draw = function() {
	ctx1.save();
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) {
			//draw	
			this.r[i] += deltaTime * 0.15;
			var alpha = 1 - this.r[i] / 100;;
			if (this.r[i] > 100 && this.type[i] != 2) {
				this.alive[i] = false;
				this.r[i] = 0;
			} else if(this.r[i] < 200) {
				alpha = 1 - this.r[i] / 200;
			} else {
				this.alive[i] = false;
				this.r[i] = 0;
			}
			
			ctx1.lineWidth = 5;
			if (this.type[i] == 0) {
				ctx1.strokeStyle = "rgba(255, 255, 0," + alpha + ")";
			} else if(this.type[i] == 1){
				ctx1.strokeStyle = "rgba(255, 255, 255, " + alpha + ")";
			} else if(this.type[i] == 2) {
				ctx1.strokeStyle = "rgba(0, 0, 0, " + alpha + ")";
				ctx1.lineWidth = 15;
			}
			ctx1.beginPath();
			ctx1.arc(this.x[i], this.y[i], this.r[i], 0, 2 * Math.PI);
			ctx1.closePath();
			ctx1.stroke();
		}
	}
	ctx1.restore();
}

waveObj.prototype.born = function( x, y, type) {
	for (var i = 0; i < this.num; i++) {
		if (!this.alive[i]) {
			this.alive[i] = true;
			this.x[i] = x;
			this.y[i] = y;
			this.type[i] = type;
			return;
		}
	}
}