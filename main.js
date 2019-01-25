var gameData = {
  gold: 0,
  goldPerClick: 1,
  goldPerClickCost: 10
}
document.body.style.backgroundColor= "black";
document.body.style.color="red";

function mineGold() {
  gameData.gold += gameData.goldPerClick
  document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

function buyGoldPerClick() {
  if (gameData.gold >= gameData.goldPerClickCost) {
    gameData.gold -= gameData.goldPerClickCost
    gameData.goldPerClick += 1
    gameData.goldPerClickCost *= 2
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
    document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
  }
}

var mainGameLoop = window.setInterval(function() {
  mineGold()

}, 1000)

//save
var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('goldMinerSave', JSON.stringify(gameData))
}, 1500)

//load
var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
if (savegame !== null) {
  gameData = savegame
}

//save löschen+refresh
function killsave(){
window.localStorage.removeItem("goldMinerSave");
window.localStorage.clear();
savegame=0;
window.localStorage.setItem('goldMinerSave', JSON.stringify(null)),
window.location.reload();
}
