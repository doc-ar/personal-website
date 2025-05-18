export function handleCanvasClick(
  e,
  canvasRef,
  canvasStateRef,
  aliveCells,
  setAliveCells,
) {
  const canvas = canvasRef.current;
  const canvasState = canvasStateRef.current;

  const rect = canvas.getBoundingClientRect();

  // Account for canvas scaling (CSS size vs actual pixel resolution)
  const scaleX = canvas.width / rect.width;
  const scaleY = canvas.height / rect.height;

  const col = Math.floor(
    ((e.clientX - rect.left) * scaleX) / canvasState.cellSize,
  );
  const row = Math.floor(
    ((e.clientY - rect.top) * scaleY) / canvasState.cellSize,
  );

  const key = `${col},${row}`;

  const newSet = new Set(aliveCells);
  newSet.add(key);
  setAliveCells(newSet);
}

export function handleMouseDown(e, setIsDrawing, handleClick) {
  e.preventDefault;
  setIsDrawing(true);
  handleClick(e); // Also fill on initial click
}
export function handleMouseMove(e, isDrawing, handleClick) {
  if (isDrawing) {
    handleClick(e); // Fill only while dragging
  }
}
export function handleMouseUp(setIsDrawing) {
  setIsDrawing(false);
}

export function handleTouchStart(e, setIsDrawing, handleClick) {
  e.preventDefault(); // Prevent scrolling and other default gestures
  setIsDrawing(true);
  handleClick(convertTouchToMouseEvent(e)); // Simulate a click
}

export function handleTouchMove(e, isDrawing, handleClick) {
  e.preventDefault();
  if (isDrawing) {
    handleClick(convertTouchToMouseEvent(e)); // Simulate drag fill
  }
}

export function handleTouchEnd(setIsDrawing) {
  setIsDrawing(false);
}

// Utility to convert a TouchEvent to a format compatible with handleClick
function convertTouchToMouseEvent(touchEvent) {
  const touch = touchEvent.touches[0] || touchEvent.changedTouches[0];
  return {
    clientX: touch.clientX,
    clientY: touch.clientY,
    preventDefault: () => {}, // Dummy to keep interface consistent if needed
  };
}
