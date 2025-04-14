// src/components/ToolBar/ToolBar.test.tsx
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import ToolBar from "./ToolBar";
import toolStore from "../../stores/ToolStore";

describe("ToolBar", () => {
  it("should render the shape and fill icons with appropriate labels", () => {
    render(<ToolBar />);

    expect(screen.getByLabelText("Shape tool")).toBeInTheDocument();
    expect(screen.getByLabelText("Fill tool")).toBeInTheDocument();

    // Tools to be implemented in the future
    // expect(screen.getByLabelText("Eraser tool")).toBeInTheDocument();
    // expect(screen.getByLabelText("Undo")).toBeInTheDocument();
    // expect(screen.getByLabelText("Clear Canvas")).toBeInTheDocument();
  });

  it("updates selected tool in toolStore when a tool is clicked", async () => {
    render(<ToolBar />);
    const fillButton = screen.getByLabelText("Fill tool");
    await userEvent.click(fillButton);
    expect(toolStore.selectedTool).toBe("fill");
  });

  it("displays tooltip on hover", async () => {
    render(<ToolBar />);
    const shapeButton = screen.getByLabelText("Shape tool");

    await userEvent.hover(shapeButton);

    const tooltipContent = await screen.findByTestId("radix-tooltip-content");
    expect(tooltipContent).toBeVisible();
    expect(tooltipContent).toHaveTextContent("Shape");
  });
});
