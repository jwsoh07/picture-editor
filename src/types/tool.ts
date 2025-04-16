import { ReactElement } from "react";
import { Shape } from ".";

export enum Tool {
  Shape = "shape",
  Fill = "fill",
  Pencil = "pencil",
  Brush = "brush",
}

export type ToolAttributes = {
  id: Tool;
  label: string;
  icon: ReactElement;
  displaySettings: ReactElement;
};

export interface ShapeToolOptions extends DrawingToolOptions {
  type: Shape;
}

export interface PencilToolOptions extends DrawingToolOptions {
  size: string;
}

export interface BrushToolOptions extends DrawingToolOptions {
  size: string;
}

// Delibrately surpressed error message as I want to give
// an interface name to the options of the fill tool.
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FillToolOptions extends DrawingToolOptions {}

interface DrawingToolOptions {
  color: string;
}

export interface ToolOptions {
  shape: ShapeToolOptions;
  fill: FillToolOptions;
  pencil: PencilToolOptions;
  brush: BrushToolOptions;
}
