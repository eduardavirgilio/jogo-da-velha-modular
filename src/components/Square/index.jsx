
// O Square é um componente  que representa um quadrado do tabuleiro do jogo da velha
// O value vai passar o valor de cada quadrado, podendo ser X, O ou null se o quadrado estiver vazio
// Essa função faz o valor aparecer dentro do btn que foi clicado

export default function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}