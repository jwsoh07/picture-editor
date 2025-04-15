import { Canvas, CircleBrush } from "fabric";
import { ToolOptions } from "../types";

export function handleBrushTool(
  canvas: Canvas,

  options: ToolOptions["brush"]
) {
  canvas.freeDrawingBrush = new CircleBrush(canvas);
  canvas.freeDrawingBrush.color = options.color;
  // canvas.freeDrawingBrush.width = options.width;

  // Will be great if we can create a layer for
  // free hand tools here.
}
