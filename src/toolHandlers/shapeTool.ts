import { Canvas, Point, Rect, Circle } from "fabric";
import { ToolOptions } from "../types";
import { layerStore } from "../stores/LayerStore";

export function handleShapeTool(
  canvas: Canvas,
  pointer: Point,
  options: ToolOptions["shape"]
) {
  const { color, type } = options;
  let shape: Rect | Circle | null = null;

  if (type === "rectangle") {
    shape = new Rect({
      left: pointer.x,
      top: pointer.y,
      width: 100,
      height: 60,
      fill: color,
    });
  } else if (type === "circle") {
    shape = new Circle({
      left: pointer.x,
      top: pointer.y,
      radius: 40,
      fill: color,
    });
  }

  if (shape) {
    canvas.add(shape);
    canvas.renderAll();

    layerStore.addLayer({
      type: "shape",
      tool: "shape",
      options,
    });
  }
}
