// função que renderiza o estado atual do jogo e gerencia os cliques nos botões

import calculateWinner from "../../../utils/calculateWINNER.js";
import Square from "../Square";

export default function Board({ xIsNext, squares, onPlay }) {
  // função para o clique em um botao
  function handleClick(i) {
    // verifica se já tem um vencedor ou se a casa já está preenchida, caso sim, ignora o clique
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // determina se 'X' ou 'O' vai ser colocado no botao clicado
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares); // atualiza o estado do jogo
  }

  // verifica se tem um vencedor e define a mensagem
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

   // renderiza o componente organizados em linhas.
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}