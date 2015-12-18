var can1;
var can2;
var ctx1;
var ctx2;
var canWidth;
var canHeight;
var ane;
var fruit;
var mom;
var baby;
var bgPic = new Image();
var mx;
var my;
var data;
var wave;
var lastTime;
var deltaTime;
var bomb;
var stab;
var momBody = new Image();
var babyBody = new Image();
var bombPic = new Image();
var bgMusic;
var deadMusic;
var eatMusic;
var feedMusic;

document.body.onload = game;

function game() {
	hideNewGameBtn();
	init();
	startBGMusic();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init() {
	bgMusic = document.getElementById("bgMusic");
	deadMusic = document.getElementById("deadMusic");
	eatMusic = document.getElementById("eatMusic");
	feedMusic = document.getElementById("feedMusic");
	
	can1 = document.getElementById("canvas1");//fish
	
	ctx1 = can1.getContext("2d");
	can2 = document.getElementById("canvas2");//background, fruit
	ctx2 = can2.getContext("2d");
	
	can1.addEventListener("click", onClick, false);
	var newGameBtn = document.getElementById("newGameBtn");
	newGameBtn.src="./images/restart.png";
	newGameBtn.addEventListener("click", game, false);
	ctx1.fillStyle = "white";
	ctx1.font = "30px Verdana";
	ctx1.textAlign = "center";

	bgPic.src = "./images/background.png";
	bombPic.src = "./images/bomb.png";
	momBody.src = "./images/fishmom.png";
	babyBody.src = "./images/fishbaby.png";

	canWidth = can1.width;
	canHeight = can1.height;

	ane = new aneObj();
	ane.init();
	fruit = new fruitObj();
	fruit.init();
	mom = new momObj();
	mom.init();
	baby = new babyObj();
	baby.init();
	bomb = new bombObj();
	bomb.init();
	stab = new stabObj();
	stab.init();

	mx = canWidth * 0.5;
	my = canHeight * 0.5;

	data = new dataObj();
	wave = new waveObj();
	wave.init();
}

function gameloop() {
	window.requestAnimFrame(gameloop);
	console.log(window.requestAnimFrame);
	var now = Date.now();
	deltaTime = now - lastTime;
	if (deltaTime >20) {
		deltaTime = 20;
	}
	lastTime = now;
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	bombMonitor();
	bomb.draw();
	stabMonitor();
	stab.draw();
	ctx1.clearRect(0, 0, canWidth, canHeight);
	mom.draw();
	baby.draw();
	momFruitCollision();
	momBabyCollision();
	momBombCollision();
	momStabCollision();
	data.draw();
	wave.draw();
	newGame();
}

function onClick(e) {
	if (!data.gameOver) {
		if(e.offSetX || e.layerX) {
			mx = e.offSetX == undefined ? e.layerX : e.offSetX;
			my = e.offSetY == undefined ? e.layerY : e.offSetY;
		}
	}
}