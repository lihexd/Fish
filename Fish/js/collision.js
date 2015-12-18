//mom fruit distance
function momFruitCollision() {
	if (!data.gameOver) {
		for(var i=0; i<fruit.num; i++) {
			if (fruit.alive[i]) {
				var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
				if (l < 700) {
					fruit.dead(i);
					wave.born(fruit.x[i], fruit.y[i], 1);
					mom.momBodyCount++;
					data.fruitNum++;
					if (fruit.type[i] == "blue") {
						data.double = 2;
					} else {
						data.double = 1;
					}
					
					startEatMusic();
				}
			}
		}
	};
}
//mom baby distance
function momBabyCollision() {
	if (!data.gameOver) {
		var l = calLength2(mom.x, mom.y, baby.x, baby.y);
		if (l < 700 && mom.momBodyCount > 0) {
			baby.recover();
			wave.born(baby.x, baby.y, 0);
			data.addScore();
			mom.reset();
			startFeedMusic();
		}
	}
}

//mom bomb distance
function momBombCollision() {
	if (!data.gameOver) {
		for (var i = 0; i < bomb.num; i++) {
			if (bomb.alive[i]) {
				var l = calLength2(mom.x, mom.y, bomb.upx[i], bomb.upy[i]);
				if (l < 520) {
					data.gameOver = true;
					bomb.dead(i);
					wave.born(bomb.upx[i], bomb.upy[i], 2);
					stopBGMusic();
					startDeadMusic();
				}
			}	
		}
	}
}

//mom stab distance
function momStabCollision() {
	if(!data.gameOver) {
		for(var i = 0; i < stab.num; i++) {
			if(stab.alive[i]) {
				var l = calLength2(mom.x, mom.y, stab.x[i], stab.y[i]);
				if(l < 520) {
					data.gameOver = true;
					
					wave.born(mom.x, mom.y, 2);
					startDeadMusic();
				}
			}
		}
	}
}