var aneObj = function() {
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.amp = [];
	this.alpha = 0;
}

aneObj.prototype.num = 25;
aneObj.prototype.init = function() {
	for(var i=0; i< this.num; i++) {
		this.rootx[i] = i * 16 + Math.random() * 20;
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - 150 - Math.random() * 250;
		this.amp[i] = Math.random() * 20 + this.heady[i] * 0.3;
	}
}

aneObj.prototype.draw = function() {

	ctx2.save();
	ctx2.globalAlpha = 0.6;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#25f60a";

	this.alpha += deltaTime * 0.001;
	var l = Math.sin(this.alpha);
	for(var i=0; i<this.num; i++) {
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i], canHeight);
		this.headx[i]  = this.rootx[i] + l * this.amp[i] * 0.4;
		ctx2.quadraticCurveTo(this.rootx[i], canHeight - this.heady[i] * 0.1, this.headx[i] , this.heady[i]);
		ctx2.stroke();
	}
	ctx2.restore();
}