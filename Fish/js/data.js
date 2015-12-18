var dataObj = function (){
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
	this.gameOver = false;
	this.alpha = 0;
}

dataObj.prototype.reset = function() {
	this.fruitNum = 0;
	this.double = 1;
}

dataObj.prototype.draw = function() {
	var w = can1.width;
	var h = can1.height;

	ctx1.save();
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = "white";
	//规则文字
	ctx1.fillText("大鱼喂小鱼，保持小鱼血量", w * 0.5, 100);
	ctx1.fillText("大鱼会引爆鱼雷", w * 0.5, 140);
	ctx1.fillText("Score:" + this.score, w* 0.5, h-20);

	if (this.gameOver) {
		this.alpha += deltaTime * 0.0005;
		if (this.alpha > 1) {
			this.alpha = 1;
		}
		
		ctx1.fillStyle = "rgba(255, 255, 255," + this.alpha + ")";
		ctx1.fillText("GAME OVER", w* 0.5, h * 0.5 - 50);
	}

	ctx1.restore();
}

dataObj.prototype.addScore = function() {
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1;
}