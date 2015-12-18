var momObj = function() {
	this.x;
	this.y;
	this.angle;
	this.momBodyCount;
}

momObj.prototype.init = function() {
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.momBodyCount = 0;
	this.angle = 0;
}

momObj.prototype.reset = function() {
	this.momBodyCount = 0;
}
momObj.prototype.draw = function() {

	this.x = lerpDistance(mx, this.x, 0.9);
	this.y = lerpDistance(my, this.y, 0.9);

	var deltaY = my - this.y;
	var deltaX = mx - this.x;

	var beta = Math.atan2(deltaY, deltaX) + Math.PI;
	this.angle = lerpAngle(beta, this.angle, 0.1);
	
	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(momBody, -momBody.width * 0.5, -momBody.height * 0.5);
	ctx1.restore();
}