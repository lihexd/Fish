# Tizen-App-Fish

## 概述

Fish是一款休闲游戏，这款游戏的操作很简单，玩家通过点击屏幕控制画面中的大鱼游动，吃到水中产生的上浮的果实（一共两种），吃到果实后会有涟漪显示（白色涟漪）。小鱼会缓慢的跟随大鱼前进，大鱼吃到果实后要及时的回到小鱼身边喂小鱼果实（黄色涟漪），小鱼的生命只有7秒钟，如果7秒钟内大鱼没有喂到小鱼那么游戏就会结束。游戏累计大鱼喂小鱼吃果实的分数。如果大鱼撞到渔民丢下的鱼雷或者其他危险的鱼（黑色涟漪），那么大鱼会死亡，游戏结束。

## 算法介绍

Fish基于TIZEN web project开发，主要使用了Html5与Javascript技术。通过canvas绘制整个游戏的背景，角色，景物等等，通过JavaScript监听点击事件来实现整个游戏。因为canvas的绘制压力偏大，所以有时会有卡顿的现象。

```js
function game() {
	init();
	startBGMusic();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
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

}
```
