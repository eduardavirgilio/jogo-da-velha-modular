// função  que gerencia o estado do jogo da velha

import { useState } from 'react';
import Board from '../Board';

export default function Game() {
  // armazena o histórico de todas as configurações do tabuleiro
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // rastreia qual movimento está sendo visualizado 
  const [currentMove, setCurrentMove] = useState(0);
  // determina se é a vez do jogador X (movimentos pares)
  const xIsNext = currentMove % 2 === 0;
  // configuração atual das casas do tabuleiro a partir do histórico
  const currentSquares = history[currentMove];

  // função chamada pelo componente Board para atualizar o estado após um movimento
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
  // atualiza o histórico.
    setHistory(nextHistory);
  // move o ponteiro para o novo último movimento
    setCurrentMove(nextHistory.length - 1);
  }

  // função para "voltar no tempo", alterando o índice do movimento atual
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // mapeia o array de histórico para criar uma lista de botões.
  const moves = history.map((squares, move) => {
    let description;
  // define o texto do botão
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  // renderiza o componente
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}