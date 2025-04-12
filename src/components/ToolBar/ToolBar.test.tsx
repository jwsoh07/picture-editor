// src/components/ToolBar/ToolBar.test.tsx
import { describe, it, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import ToolBar from "./ToolBar";
import toolStore from "../../stores/ToolStore";
import { act } from "react-dom/test-utils";

describe("ToolBar", () => {
  it("should render and allow selecting tools", () => {
    const { getByText } = render(<ToolBar />);

    const shapeBtn = getByText("Shape");
    const fillBtn = getByText("Fill");

    expect(toolStore.selectedTool).toBe(null);

    act(() => fireEvent.click(shapeBtn));
    expect(toolStore.selectedTool).toBe("shape");

    act(() => fireEvent.click(fillBtn));
    expect(toolStore.selectedTool).toBe("fill");
  });
});
