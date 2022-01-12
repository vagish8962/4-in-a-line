let gameField = new Array(6);
let currentPlayer;
let id = 0;
const block = document.getElementById('game-block');
newGame();

function newGame() {
  gameField.fill(0);
  placeDisc(Math.floor(Math.random() * 2) + 1);
  for (let cell of gameField) {
    let el = document.createElement('div');
    el.className = 'cell';
    block.appendChild(el);
  }
}

function placeDisc(player) {
  currentPlayer = player;
  const disc = new Disc(currentPlayer);
}

function Disc(currentPlayer) {
  this.player = currentPlayer;
  this.color = this.player === 1 ? 'red' : 'yellow';
  id++;
  block.innerHTML += `<div id="g-${id}" class="disc ${this.color}"></div>`;
}
