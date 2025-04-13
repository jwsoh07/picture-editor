import { Canvas } from "fabric";
import { ToolOptions } from "../types";
import { layerStore } from "../stores/LayerStore";

export function handleFillTool(canvas: Canvas, options: ToolOptions["fill"]) {
  canvas.backgroundColor = options.color;
  canvas.renderAll();

  layerStore.addLayer({
    type: "background",
    tool: "fill",
    options,
  });
}
