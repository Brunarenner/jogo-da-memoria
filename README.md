# 🍄 Jogo da Memória: Edição Reino do Cogumelo 🌟

Bem-vindo ao **Memory Game – Edição Reino do Cogumelo!**
Uma releitura nostálgica do clássico jogo da memória, inspirada no universo **Super Mario Bros**.
Teste sua memória encontrando todos os pares de **Power-Ups**, **inimigos** e outros elementos icônicos do Reino do Cogumelo.

---

## 🛠️ Stack & Elementos do Jogo

| Recurso            | Função Principal        | Tema Mario Bros                             |
| ------------------ | ----------------------- | ------------------------------------------- |
| **HTML5**          | Estrutura da página     | Base do Nível 1-1                           |
| **CSS3**           | Estilização e animações | Blocos de Tijolo, Céu Azul e efeito flip    |
| **JavaScript**     | Lógica e interatividade | Embaralhamento, checagem de pares e vitória |
| **Imagens/Assets** | Conteúdo das cartas     | Pixel Art de personagens e itens clássicos  |

---

## 🕹️ Como Jogar

### 1. Preparação Rápida

1. Clone este repositório ou baixe os arquivos.
2. Abra o arquivo `index.html` em seu navegador.
3. As cartas serão carregadas automaticamente — pronto para jogar!

---

### 2. A Lógica da Virada (Flip)

O jogo utiliza **classes CSS** e **atributos de dados** para controlar o estado das cartas.
Abaixo, um resumo da interação:

| Evento                | Ação JavaScript                   | Efeito Visual                      |
| --------------------- | --------------------------------- | ---------------------------------- |
| Clique em uma carta   | `handleClick()`                   | Adiciona `.boxOpen` (vira a carta) |
| Segunda carta clicada | `checkMatch()` compara `data-img` | Verifica se há par                 |

**Resultados possíveis:**

| Resultado                    | Ação no Jogo                         | Classe CSS Aplicada   |
| ---------------------------- | ------------------------------------ | --------------------- |
| ✅ **MATCH!** (pares iguais)  | As cartas permanecem abertas e fixas | `.boxMatch`           |
| ❌ **NO MATCH!** (diferentes) | As cartas se fecham após 500ms       | `.boxOpen` é removida |

---

### 3. Reiniciando o Jogo

O botão **“RESET GAME”** (estilizado como um **Bloco ?**) permite **reembaralhar as cartas** e começar um novo desafio a qualquer momento.

---

## 🎨 Estilo Pixelado (CSS Temático)

O visual do jogo foi inspirado nos cenários clássicos de Mario:

* **Fundo (`body`)** → Azul-céu clássico `#6b8cff`
* **Face escondida (`.item::after`)** → Textura de bloco de tijolo (marrom escuro)
* **Face aberta (`.item`)** → Verde-cano `#5cb85c`
* **Botão Reset (`.reset`)** → Bloco de Moeda (?) amarelo com bordas destacadas

---

## 🧩 Personalizando as Cartas (Para Desenvolvedores)

Quer adicionar seus próprios sprites (Goombas, Koopas, Estrelas, etc.)?

1. Coloque suas imagens **.png** na pasta `src/img/`
2. No arquivo `engine.js`, atualize o array `imagens` com os novos caminhos

Exemplo:

```javascript
// Lembre-se: cada imagem deve aparecer duas vezes para formar um par!
const imagens = [
  'src/img/goomba.png',
  'src/img/estrela.png',
  // ...
  'src/img/goomba.png',  // Duplicata
  'src/img/estrela.png', // Duplicata
];
```

---

🎯 **Dica bônus:**
Você pode ajustar o tempo de virada, número de pares ou efeitos visuais no `engine.js` e `main.css` para criar sua própria versão do jogo!

---

👾 **Divirta-se explorando o Reino do Cogumelo!**
Feito com ❤️ por fãs de Super Mario e do poder da nostalgia.
