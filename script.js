function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
let tps = 0;
let lastTime = Date.now();
async function gameLoop() {
    tps++;
    if (Date.now() - lastTime >= 1000) {
      document.getElementById("tps").innerHTML = `TPS: ${tps}`;
      tps = 0;
      lastTime = Date.now();
    }
  requestAnimationFrame(gameLoop)
}
requestAnimationFrame(gameLoop)