// 🎭 EASTER EGG PARA QUEM ESTÁ INSPECCIONANDO O CÓDIGO
console.log('%c =========================================== ', 'background: #1a1d29; color: #4fc3f7; font-size: 16px; font-weight: bold;');
console.log('%c E aí, curioso! 👀', 'color: #ff9e64; font-size: 18px; font-weight: bold;');
console.log('%c O que está fazendo por aqui, hein? 🤨', 'color: #e8e8e8; font-size: 14px;');
console.log('%c Se você quer saber mais sobre o site ou tem interesse em contratar,', 'color: #e8e8e8; font-size: 12px;');
console.log('%c entre em contato comigo! ☎️', 'color: #66bb6a; font-size: 13px; font-weight: bold;');
console.log('%c WhatsApp: 11 9543-92016', 'color: #22c55e; font-size: 16px; font-weight: bold;');
console.log('%c E saia daqui, seu curioso! 😄', 'color: #ff9e64; font-size: 12px; font-style: italic;');
console.log('%c =========================================== ', 'background: #1a1d29; color: #4fc3f7; font-size: 16px; font-weight: bold;');

// menu hamburger
document.addEventListener('DOMContentLoaded', function() {
const ham = document.getElementById('hamburger');
const nav = document.getElementById('navLinks');

if (ham && nav) {
ham.addEventListener('click', () => nav.classList.toggle('open'));

// close on link click
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// efeito fade ao rolar a página
const observer = new IntersectionObserver((entries) => {
entries.forEach(e => {
if (e.isIntersecting) {
e.target.classList.add('visible');
observer.unobserve(e.target);
}
});
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

// Jogo da Snake (Cobrinha)
let canvas, ctx, gameLoop;
let snake = [], direction = 'RIGHT', food = {}, score = 0;
let gridSize = 16, tileCount = 20, tileSize = 0;

function initGame() {
canvas = document.getElementById('snakeCanvas');
if (!canvas) return;
ctx = canvas.getContext('2d');
tileSize = Math.min(canvas.width, canvas.height) / tileCount;
resetGame();
draw();
}

function resetGame() {
snake = [{x: 10, y: 10}];
direction = 'RIGHT';
score = 0;
updateScore();
generateFood();
}

function generateFood() {
food = {
x: Math.floor(Math.random() * tileCount),
y: Math.floor(Math.random() * tileCount)
};
// Não gerar comida sobre a cobra
if (snake.some(s => s.x === food.x && s.y === food.y)) {
generateFood();
}
}

function draw() {
// Limpar o canvas
ctx.fillStyle = '#161b27';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Desenhar a cobra
ctx.fillStyle = '#3b82f6';
snake.forEach((segment, i) => {
ctx.fillRect(
segment.x * tileSize + 1,
segment.y * tileSize + 1,
tileSize - 2,
tileSize - 2
);
// Brilho na cabeça
if (i === 0) {
ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
ctx.fillRect(
segment.x * tileSize - 2,
segment.y * tileSize - 2,
tileSize + 4,
tileSize + 4
);
ctx.fillStyle = '#3b82f6';
}
});

// Desenhar a comida
ctx.fillStyle = '#22c55e';
ctx.beginPath();
ctx.arc(
food.x * tileSize + tileSize/2,
food.y * tileSize + tileSize/2,
tileSize/2 - 2,
0,
Math.PI * 2
);
ctx.fill();
}

function update() {
const head = {x: snake[0].x, y: snake[0].y};

switch(direction) {
case 'UP': head.y--; break;
case 'DOWN': head.y++; break;
case 'LEFT': head.x--; break;
case 'RIGHT': head.x++; break;
}

// Colisão com a parede
if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
return gameOver();
}

// Colisão com o próprio corpo
if (snake.some(s => s.x === head.x && s.y === head.y)) {
return gameOver();
}

snake.unshift(head);

// Food collision
if (head.x === food.x && head.y === food.y) {
score++;
updateScore();
generateFood();
} else {
snake.pop();
}
}

function gameLoopFn() {
update();
draw();
}

function updateScore() {
const scoreEl = document.getElementById('gameScore');
if (scoreEl) scoreEl.textContent = score;
}

function gameOver() {
if (gameLoop) {
clearInterval(gameLoop);
gameLoop = null;
}
const overlay = document.getElementById('gameOverlay');
if (overlay && score > 0) {
overlay.querySelector('p').textContent = `Score: ${score} | Pressione qualquer tecla`;
overlay.classList.add('visible');
}
}

function startGame() {
// Garantir que o jogo está inicializado se não estiver
if (!canvas) {
    initGame();
}
// Só iniciar se ainda não estiver em execução
if (!gameLoop) {
    resetGame();
    const overlay = document.getElementById('gameOverlay');
    if (overlay) overlay.classList.remove('visible');
    gameLoop = setInterval(gameLoopFn, 100);
}
}

// Controls
document.addEventListener('keydown', (e) => {
// Permitir que qualquer tecla de movimento inicie o jogo
const k = e.key.toLowerCase();

if (k === 'arrowup' || k === 'w') {
if (direction !== 'DOWN') direction = 'UP';
} else if (k === 'arrowdown' || k === 's') {
if (direction !== 'UP') direction = 'DOWN';
} else if (k === 'arrowleft' || k === 'a') {
if (direction !== 'RIGHT') direction = 'LEFT';
} else if (k === 'arrowright' || k === 'd') {
if (direction !== 'LEFT') direction = 'RIGHT';
}

if (!gameLoop && ['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 'a', 's', 'd'].includes(k)) {
console.log("Tecla de movimento detectada, iniciando jogo...");
startGame();
}

// Prevent page scroll
e.preventDefault();
});

// Auto start the overlay
window.addEventListener('load', initGame);
