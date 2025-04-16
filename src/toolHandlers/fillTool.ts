import { Canvas } from "fabric";
import { LayerType, Tool, ToolOptions } from "../types";
import { layerStore } from "../stores/LayerStore";

export function handleFillTool(
  canvas: Canvas,
  options: ToolOptions[Tool.Fill]
) {
  canvas.backgroundColor = options.color;
  canvas.renderAll();

  layerStore.addLayer({
    type: LayerType.Background,
    tool: Tool.Fill,
    options,
  });
}
