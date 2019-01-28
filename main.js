var gameData = {
  gold: 0,
  goldPerClick: 1,
  goldPerClickCost: 10,
  stone:0,
  stonePerClick:1,
  stonePerClickCost:10,
}


  window.document.body.style.backgroundColor= "black";
  window.document.body.style.color="white";



function mineGold() {
  gameData.gold += gameData.goldPerClick
  document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}

function mineStone(){
gameData.stone += gameData.stonePerClick
document.getElementById("stoneMined").innerHTML = gameData.stone +" Stone Mined"
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

function buyStonePerClick() {
  if (gameData.stone >= gameData.stonePerClickCost) {
    gameData.stone -= gameData.stonePerClickCost
    gameData.stonePerClick += 1
    gameData.stonePerClickCost *= 2
    document.getElementById("stoneMined").innerHTML = gameData.stone + " Stone Mined"
    document.getElementById("perClickUpgradeStone").innerHTML = "Upgrade Stone Pickaxe (Currently Level " + gameData.stonePerClick + ") Cost: " + gameData.stonePerClickCost + " Stone"
  }else {
    
  }
}


var mainGameLoop = window.setInterval(function() {
  mineGold();
mineStone();
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
