import {
  ShapeToolOptions,
  FillToolOptions,
  PencilToolOptions,
  BrushToolOptions,
} from "./tool";

export type LayerType = "shape" | "background" | "freehand";

export interface Layer {
  id: string;
  type: LayerType;
  tool: "fill" | "shape" | "pencil" | "brush";
  options:
    | ShapeToolOptions
    | FillToolOptions
    | PencilToolOptions
    | BrushToolOptions;
  timestamp: number;
}
