const emojis = [
    '🍄', '🏆', '🐢', '🌟', '👻', '🐲',
    '🍄', '🏆', '🐢', '🌟', '👻', '🐲',
];
let openCards = [];
let shuffledEmojis = []; // Inicializamos vazio, será preenchido em initGame

const gameContainer = document.querySelector('.game');

// --- Função Principal para Iniciar/Reiniciar o Jogo ---
function initGame() {
    // 1. Limpa o contêiner do jogo de todas as caixas antigas
    gameContainer.innerHTML = '';
    
    // 2. Embaralha os emojis
    shuffledEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
    
    // 3. Reseta as cartas abertas
    openCards = [];

    // 4. Cria e adiciona as novas caixas
    for (let i = 0; i < emojis.length; i++) {
        let box = document.createElement('div');
        box.className = "item";
        box.innerHTML = shuffledEmojis[i];
        box.onclick = handleClick;
        gameContainer.appendChild(box);
    }
}

// --- Lógica do Jogo ---

function handleClick() {
    // CORREÇÃO: Impedir que a mesma carta seja clicada duas vezes e que cartas já casadas sejam clicadas
    if (this.classList.contains("boxOpen") || this.classList.contains("boxMatch")) {
        return;
    }
    
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length === 2) {
        // O seu setTimeout já estava correto
        setTimeout(checMatch, 500);
    }
}

function checMatch() {
    // Certifique-se de que há duas cartas para comparar antes de prosseguir
    if (openCards.length < 2) return; 
    
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        // CASOU
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");

    } else {
        // NÃO CASOU
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    
    // Zera o array para o próximo par de cliques
    openCards = [];
    
    // Verifica se o jogo terminou
    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
        alert("Parabéns! Você ganhou!");
        // Opcional: Chamar a função de reset aqui para começar um novo jogo após o alerta
        // initGame(); 
    }
}

// ----------------------------------------------------
// 1. CHAMA A FUNÇÃO PARA INICIAR O JOGO QUANDO O SCRIPT CARREGA
initGame(); 
// ----------------------------------------------------

// 2. Função de Reset para ser chamada por um botão no HTML
// Exemplo: <button onclick="resetGame()">Reiniciar Jogo</button>
function resetGame() {
    initGame();
}