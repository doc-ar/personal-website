export default function checkWin(squares) {
  const win_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let condition of win_conditions) {
    const [a, b, c] = condition;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return condition;
    }
  }

  return null;
}
