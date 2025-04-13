import { ToolID, ShapeToolOptions, FillToolOptions } from "./tool";

export type LayerType = "shape" | "background";

export interface Layer {
  id: string;
  type: LayerType;
  tool: ToolID;
  options: ShapeToolOptions | FillToolOptions;
  timestamp: number;
}
