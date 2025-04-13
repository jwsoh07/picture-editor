// src/components/ToolBar/ToolBar.test.tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ToolBar from "./ToolBar";

describe("ToolBar", () => {
  it("should render the shape and fill icons with appropriate labels", () => {
    render(<ToolBar />);

    const shapeIconButton = screen.getByLabelText("Shape tool");
    const fillIconButton = screen.getByLabelText("Fill tool");

    expect(shapeIconButton).toBeInTheDocument();
    expect(fillIconButton).toBeInTheDocument();
  });
});
