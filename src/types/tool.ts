import { ReactElement } from "react";

export type ToolID = "shape" | "fill";

export type Shape = "rectangle" | "circle" | "hexagon" | "triangle";

export type ToolAttributes = {
  id: ToolID;
  label: string;
  icon: ReactElement;
  displaySettings: ReactElement;
};

export type ShapeToolOptions = {
  type: Shape;
  color: string;
};

export type FillToolOptions = {
  color: string;
};

export type ToolOptions = {
  shape: ShapeToolOptions;
  fill: FillToolOptions;
};
