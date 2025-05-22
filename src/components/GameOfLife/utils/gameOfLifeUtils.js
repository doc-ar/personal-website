import getVariableValue from "./getVariableValue";

export function drawGrid(canvasState) {
  const { ctx, cols, rows, cellSize } = canvasState;
  const gridColor = getVariableValue("--simulation-grid-color");
  ctx.strokeStyle = gridColor;

  for (let x = 0; x <= cols; x++) {
    ctx.beginPath();
    ctx.moveTo(x * cellSize, 0);
    ctx.lineTo(x * cellSize, rows * cellSize);
    ctx.stroke();
  }

  for (let y = 0; y <= rows; y++) {
    ctx.beginPath();
    ctx.moveTo(0, y * cellSize);
    ctx.lineTo(cols * cellSize, y * cellSize);
    ctx.stroke();
  }
}

export function fillCell(canvasState, col, row) {
  const { ctx, cellSize } = canvasState;
  const cellColor = getVariableValue("--simulation-cell-color");
  ctx.fillStyle = cellColor;
  ctx.fillRect(
    col * cellSize + 1,
    row * cellSize + 1,
    cellSize - 2,
    cellSize - 2,
  );
}

export function resetGrid(canvasState) {
  const { ctx, cols, rows, cellSize } = canvasState;
  ctx.clearRect(0, 0, cols * cellSize, rows * cellSize);
  drawGrid(canvasState);
}

export function nextGeneration(aliveCells, setAliveCells) {
  const neighborOffsets = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [-1, 0],
    [1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
  ];

  const neighborCounts = new Map();

  aliveCells.forEach((cell) => {
    const [x, y] = cell.split(",").map(Number);

    neighborOffsets.forEach(([dx, dy]) => {
      const neighborKey = `${x + dx},${y + dy}`;
      neighborCounts.set(
        neighborKey,
        (neighborCounts.get(neighborKey) || 0) + 1,
      );
    });
  });

  const newAliveCells = new Set();

  neighborCounts.forEach((count, cell) => {
    const isAlive = aliveCells.has(cell);
    if (
      (isAlive && (count === 2 || count === 3)) ||
      (!isAlive && count === 3)
    ) {
      newAliveCells.add(cell);
    }
  });

  setAliveCells(newAliveCells);
}
