import { render, screen } from "@testing-library/react";
import toolStore from "../../stores/ToolStore";
import ControlPanel from "./ControlPanel";
import { describe, it, expect } from "vitest";

describe("ControlPanel", () => {
  it("does not render when no tool is selected", () => {
    toolStore.setSelectedTool(null);
    const { queryByTestId } = render(<ControlPanel />);
    expect(queryByTestId("control-panel")).toBeNull();
  });

  it("renders shape controls when 'shape' tool is selected", () => {
    toolStore.setSelectedTool("shape");
    render(<ControlPanel />);
    expect(screen.getByLabelText(/Color/i)).toBeInTheDocument();
    // TODO:
    // need to check for Shape selector
  });

  it("renders fill controls when 'fill' tool is selected", () => {
    toolStore.setSelectedTool("fill");
    render(<ControlPanel />);
    expect(screen.getByLabelText(/Color/i)).toBeInTheDocument();
  });
});
