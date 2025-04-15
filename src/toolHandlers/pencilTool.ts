import { Canvas, PencilBrush } from "fabric";
import { ToolOptions } from "../types";

export function handlePencilTool(
  canvas: Canvas,

  options: ToolOptions["pencil"]
) {
  canvas.freeDrawingBrush = new PencilBrush(canvas);
  canvas.freeDrawingBrush.color = options.color;

  if (options.size === "small") {
    canvas.freeDrawingBrush.width = 5;
  } else if (options.size === "medium") {
    canvas.freeDrawingBrush.width = 15;
  } else if (options.size === "large") {
    canvas.freeDrawingBrush.width = 25;
  }

  // Will be great if we can create a layer for
  // free hand tools here.
}
