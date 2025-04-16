import { Canvas, PencilBrush } from "fabric";
import { LayerType, Tool, ToolOptions } from "../types";
import { layerStore } from "../stores/LayerStore";

export function handlePencilTool(
  canvas: Canvas,

  options: ToolOptions[Tool.Pencil]
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

  layerStore.addLayer({
    type: LayerType.Freehand,
    tool: Tool.Pencil,
    options,
  });
}
