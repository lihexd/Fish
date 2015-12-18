function newGame() {
	if(data.gameOver) {
		document.getElementById("newGameBtn").style.display="block";
	}
}
function hideNewGameBtn() {
	document.getElementById("newGameBtn").style.display="none";
}
