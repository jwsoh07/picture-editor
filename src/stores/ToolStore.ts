/* The reason for using MobX for creating a selectedTool state is due to the
 * following reasons.
 *
 * The selected tool is relevant across multiple components:
 * - ToolBar (displays tool selection UI)
 * - ControlPanel (renders controls based on selected tool)
 * - DrawingArea (executes behavior based on selected tool)
 */

import { makeAutoObservable } from "mobx";
import { Tool, ToolOptions, Shape } from "../types";

export class ToolStore {
  selectedTool: Tool | null = null;

  toolOptions: ToolOptions = {
    shape: {
      type: Shape.Rectangle,
      color: "#ffffff",
    },
    fill: {
      color: "#FFFFFF",
    },
    pencil: {
      color: "#000000",
      size: "medium",
    },
    brush: {
      color: "#000000",
      size: "medium",
    },
  };

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedTool(tool: Tool) {
    this.selectedTool = tool;
  }

  setShapeType(type: Shape) {
    this.toolOptions.shape.type = type;
  }

  setPencilSize(size: string) {
    this.toolOptions.pencil.size = size;
  }

  setPencilColor(color: string) {
    this.toolOptions.pencil.color = color;
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
