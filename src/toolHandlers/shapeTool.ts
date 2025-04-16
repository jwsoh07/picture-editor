import { Canvas, Point } from "fabric";
import { LayerType, Tool, ToolOptions } from "../types";
import { layerStore } from "../stores/LayerStore";
import shapeCreatorMapping from "../utility/shapeGenerator";

export function handleShapeTool(
  canvas: Canvas,
  pointer: Point,
  options: ToolOptions[Tool.Shape]
) {
  const { color, type } = options;

  const createShape = shapeCreatorMapping[type];

  const shape = createShape(pointer, color);

  canvas.add(shape);
  canvas.renderAll();

  layerStore.addLayer({
    type: LayerType.Shape,
    tool: Tool.Shape,
    options,
  });
}
