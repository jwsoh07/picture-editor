/* The reason for using MobX for creating a selectedTool state is due to the
 * following reasons.
 *
 * The selected tool is relevant across multiple components:
 * - ToolBar (displays tool selection UI)
 * - ControlPanel (renders controls based on selected tool)
 * - DrawingArea (executes behavior based on selected tool)
 */

import { makeAutoObservable } from "mobx";
import { ToolID, ToolOptions, ShapeToolOptions } from "../types";

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
