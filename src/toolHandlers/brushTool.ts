import { Canvas, CircleBrush } from "fabric";
import { ToolOptions } from "../types";
import { layerStore } from "../stores/LayerStore";

export function handleBrushTool(
  canvas: Canvas,

  options: ToolOptions["brush"]
) {
  canvas.freeDrawingBrush = new CircleBrush(canvas);
  canvas.freeDrawingBrush.color = options.color;
  // canvas.freeDrawingBrush.width = options.width;

  layerStore.addLayer({
    type: "freehand",
    tool: "brush",
    options,
  });
}
