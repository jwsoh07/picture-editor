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

export type ToolType = "shape" | "fill" | null;

export class ToolStore {
  selectedTool: ToolType = null;

  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool: ToolType) {
    this.selectedTool = tool;
  }

  clearTool() {
    this.selectedTool = null;
  }
}

const toolStore = new ToolStore();
export default toolStore;
