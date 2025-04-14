import { Canvas, Point } from "fabric";
import { ToolOptions } from "../types";
import { layerStore } from "../stores/LayerStore";
import shapeCreatorMapping from "../utility/shapeGenerator";

export function handleShapeTool(
  canvas: Canvas,
  pointer: Point,
  options: ToolOptions["shape"]
) {
  const { color, type } = options;

  const createShape = shapeCreatorMapping[type];

  const shape = createShape(pointer, color);

  canvas.add(shape);
  canvas.renderAll();

  layerStore.addLayer({
    type: "shape",
    tool: "shape",
    options,
  });
}
