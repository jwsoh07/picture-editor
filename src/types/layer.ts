import { ShapeToolOptions, FillToolOptions } from "./tool";

export type LayerType = "shape" | "background";

export interface Layer {
  id: string;
  type: LayerType;
  tool: "fill" | "shape";
  options: ShapeToolOptions | FillToolOptions;
  timestamp: number;
}
