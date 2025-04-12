/* The reason for using MobX for creating a selectedTool state is due to the
 * following reasons.
 *
 * The selected tool is relevant across multiple components:
 * - ToolBar (displays tool selection UI)
 * - ControlPanel (renders controls based on selected tool)
 * - DrawingArea (executes behavior based on selected tool)
 */

// src/stores/ToolStore.ts
import { makeAutoObservable } from "mobx";

export type ToolID = "shape" | "fill" | null;

export type Shape = "rectangle" | "circle";

type ShapeToolOptions = {
  type: Shape;
  color: string;
};

type FillToolOptions = {
  color: string;
};

type ToolOptions = {
  shape: ShapeToolOptions;
  fill: FillToolOptions;
};

export class ToolStore {
  selectedTool: ToolID | null = null;

  toolOptions: ToolOptions = {
    shape: {
      type: "rectangle",
      color: "#ffffff",
    },
    fill: {
      color: "#FFFFFF",
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedTool(tool: ToolID | null) {
    this.selectedTool = tool;
  }

  setShapeType(type: ShapeToolOptions["type"]) {
    this.toolOptions.shape.type = type;
  }

  setShapeColor(color: string) {
    this.toolOptions.shape.color = color;
  }

  setFillColor(color: string) {
    this.toolOptions.fill.color = color;
  }

  clearTool() {
    this.selectedTool = null;
  }
}

const toolStore = new ToolStore();
export default toolStore;
