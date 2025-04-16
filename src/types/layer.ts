import {
  ShapeToolOptions,
  FillToolOptions,
  PencilToolOptions,
  BrushToolOptions,
  Tool,
} from "./tool";

export enum LayerType {
  Shape = "shape",
  Background = "background",
  Freehand = "freehand",
}

export interface Layer {
  id: string;
  type: LayerType;
  tool: Tool;
  options:
    | ShapeToolOptions
    | FillToolOptions
    | PencilToolOptions
    | BrushToolOptions;
  timestamp: number;
}
