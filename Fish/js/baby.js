var babyObj = function() {
	this.x;
	this.y;
	this.angle;

	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;
}

babyObj.prototype.init = function() {
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
}
babyObj.prototype.draw = function() {

	this.x = lerpDistance( mom.x, this.x, 0.995);
	this.y = lerpDistance( mom.y, this.y, 0.995);

	var deltaY = mom.y - this.y;
	var deltaX = mom.x - this.x;

	var beta = Math.atan2(deltaY, deltaX) + Math.PI;

	this.angle = lerpAngle(beta, this.angle, 0.1);


	this.babyBodyTimer += deltaTime;
	//7秒 game over
	if (this.babyBodyTimer > 7000) {
		data.gameOver = true;
		//game over
	}

	ctx1.save();

	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	ctx1.drawImage(babyBody, -babyBody.width * 0.5, -babyBody.height * 0.5);
	ctx1.restore();
}

babyObj.prototype.recover = function() {
	this.babyBodyTimer = 0;
}