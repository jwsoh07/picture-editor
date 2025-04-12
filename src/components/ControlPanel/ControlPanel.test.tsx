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
    expect(screen.getByText(/Shape Color/i)).toBeInTheDocument();
    expect(screen.getByText(/Shape Type/i)).toBeInTheDocument();
  });

  it("renders fill controls when 'fill' tool is selected", () => {
    toolStore.setSelectedTool("fill");
    render(<ControlPanel />);
    expect(screen.getByText(/Background Fill Color/i)).toBeInTheDocument();
  });
});
