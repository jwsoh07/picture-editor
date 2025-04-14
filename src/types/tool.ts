export type ToolID = "shape" | "fill" | null;

export type Shape = "rectangle" | "circle" | "hexagon" | "triangle";

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
