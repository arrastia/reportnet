const validateEventPosition = (mouseX: number, mouseY: number, rect?: DOMRect) => {
  if (!rect) return;
  return mouseX > rect.x && mouseX < rect.x + rect.width && mouseY > rect.y && mouseY < rect.y + rect.height;
};

export const FountainUtils = { validateEventPosition };
