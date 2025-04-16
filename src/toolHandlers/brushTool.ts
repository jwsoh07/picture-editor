import { Canvas, CircleBrush } from "fabric";
import { LayerType, Tool, ToolOptions } from "../types";
import { layerStore } from "../stores/LayerStore";

export function handleBrushTool(
  canvas: Canvas,

  options: ToolOptions[Tool.Brush]
) {
  canvas.freeDrawingBrush = new CircleBrush(canvas);
  canvas.freeDrawingBrush.color = options.color;
  // canvas.freeDrawingBrush.width = options.width;

  layerStore.addLayer({
    type: LayerType.Freehand,
    tool: Tool.Brush,
    options,
  });
}
