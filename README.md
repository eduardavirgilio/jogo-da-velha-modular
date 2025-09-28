# 🕹️ Jogo da Velha 

Este projeto é uma implementação do clássico jogo da velha construído em React, desenvolvido com base no código disponivel dentro do site https://react.dev/ porém separado em modulos.

---

## 🚀 Estrutura do Projeto e Componentes

O jogo é organizado em três componentes principais, que gerenciam a lógica, o estado e a renderização:

### 1. `Game` 

Este é o componente que gerencia **todo o estado do jogo**.

### 2. `Board` 

Este componente é responsável por renderizar o tabuleiro e gerenciar a **interação com o usuário**.

### 3. `Square` 

É o componente  que renderiza o valor ('X', 'O' ou `null`) em uma única casa do tabuleiro.

### 4. `calculateWinner.js` 

Uma função que recebe o array do tabuleiro (`squares`) e retorna o símbolo do vencedor ('X' ou 'O') se houver uma linha completa, além de conter todas as 8 combinações de vitória (linhas, colunas e diagonais).

---

## Primeiros Passos para executar o projeto

1.  Clone o repositório.
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Execute o projeto:
    ```bash
    npm run dev
    ```