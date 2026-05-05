// Snake Game - Versão Funcional e Simples
// Inicie o jogo chamando startGame() ou pressionando qualquer tecla de movimento

let canvas, ctx, gameLoop;
let snake = [], direction = 'RIGHT', food = {}, score = 0;
let gridSize = 20, tileCount = 20, tileSize = 0;

// Inicialização do jogo - chame esta função quando o DOM estiver carregado
function initSnakeGame() {
    canvas = document.getElementById('snakeCanvas');
    if (!canvas) {
        console.error("Canvas não encontrado!");
        return false;
    }

    ctx = canvas.getContext('2d');
    tileSize = canvas.width / tileCount;

    resetGameState();
    drawGame();
    return true;
}

// Resetar estado do jogo
function resetGameState() {
    snake = [{x: 10, y: 10}];
    direction = 'RIGHT';
    score = 0;
    updateGameScore();
    generateFood();
}

// Gerar posição aleatória para a comida
function generateFood() {
    food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
    };

    // Garantir que a comida não apareça na cobra
    while (snake.some(s => s.x === food.x && s.y === food.y)) {
        food = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
    }
}

// Desenhar o jogo no canvas
function drawGame() {
    // Limpar canvas
    ctx.fillStyle = '#161b27';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Desenhar cobra
    ctx.fillStyle = '#4fc3f7';
    snake.forEach((segment, i) => {
        ctx.fillRect(
            segment.x * tileSize + 1,
            segment.y * tileSize + 1,
            tileSize - 2,
            tileSize - 2
        );
    });

    // Desenhar comida
    ctx.fillStyle = '#66bb6a';
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

// Atualizar lógica do jogo
function updateGame() {
    const head = {x: snake[0].x, y: snake[0].y};

    // Mover cabeça de acordo com a direção
    switch(direction) {
        case 'UP': head.y--; break;
        case 'DOWN': head.y++; break;
        case 'LEFT': head.x--; break;
        case 'RIGHT': head.x++; break;
    }

    // Verificar colisão com as paredes
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        return endGame();
    }

    // Verificar colisão com o próprio corpo
    if (snake.some(s => s.x === head.x && s.y === head.y)) {
        return endGame();
    }

    snake.unshift(head);

    // Verificar se comeu a comida
    if (head.x === food.x && head.y === food.y) {
        score++;
        updateGameScore();
        generateFood();
    } else {
        snake.pop();
    }
}

// Loop principal do jogo
function gameLoopFunction() {
    updateGame();
    drawGame();
}

// Função START - O usuário deve chamar esta função para começar o jogo
function startGame() {
    // Garantir que o jogo está inicializado
    if (!canvas && !initSnakeGame()) {
        console.error("Não foi possível inicializar o jogo");
        return;
    }

    // Só iniciar um novo jogo se não estiver jogando
    if (!gameLoop) {
        resetGameState();
        hideGameOverlay();
        gameLoop = setInterval(gameLoopFunction, 100);
        console.log("Snake Game iniciado!");
    }
}

// Esconder overlay (se existir)
function hideGameOverlay() {
    const overlay = document.getElementById('gameOverlay');
    if (overlay) {
        overlay.classList.remove('visible');
    }
}

// Atualizar score na tela
function updateGameScore() {
    const scoreEl = document.getElementById('gameScore');
    if (scoreEl) {
        scoreEl.textContent = score;
    }
}

// Finalizar jogo
function endGame() {
    if (gameLoop) {
        clearInterval(gameLoop);
        gameLoop = null;
    }

    // Atualizar a mensagem de Game Over
    const overlay = document.getElementById('gameOverlay');
    const overlayText = overlay ? overlay.querySelector('p') : null;
    if (overlay) {
        overlay.classList.add('visible');
        if (overlayText) {
            overlayText.textContent = `Game Over! Score: ${score} - Pressione qualquer tecla para jogar novamente`;
        }
    }

    console.log(`Snake Game Over! Score: ${score}`);
}

// Inicializar quando qualquer tecla de movimento for pressionada
function initializeGameFromKeyPress() {
    if (!canvas && !initSnakeGame()) {
        console.error("Não foi possível inicializar o jogo");
        return;
    }
    startGame();
}

// Configurar controles do teclado
document.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();

    // Controles de direção
    if (k === 'arrowup' || k === 'w') {
        if (direction !== 'DOWN') direction = 'UP';
    } else if (k === 'arrowdown' || k === 's') {
        if (direction !== 'UP') direction = 'DOWN';
    } else if (k === 'arrowleft' || k === 'a') {
        if (direction !== 'RIGHT') direction = 'LEFT';
    } else if (k === 'arrowright' || k === 'd') {
        if (direction !== 'LEFT') direction = 'RIGHT';
    }

    // Auto-iniciar jogo ao pressionar uma tecla de movimento
    if (!gameLoop && ['arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'w', 'a', 's', 'd'].includes(k)) {
        initializeGameFromKeyPress();
    }

    e.preventDefault();
});

// Inicializar automaticamente quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initSnakeGame, 100);
});
