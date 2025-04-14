import { render, screen } from "@testing-library/react";
import { act } from "react";
import { beforeEach, describe, expect, it, vi, Mock } from "vitest";
import DrawingArea from "./DrawingArea";
import toolStore from "../../stores/ToolStore";
import { Canvas } from "fabric";

// 👇 Mock the 'fabric' library
vi.mock("fabric", async () => {
  const actual = await vi.importActual<typeof import("fabric")>("fabric");

  return {
    ...actual,
    Canvas: vi.fn().mockImplementation(() => ({
      on: vi.fn(),
      off: vi.fn(),
      dispose: vi.fn(),
      clear: vi.fn(),
      backgroundColor: "",
      renderAll: vi.fn(),
      add: vi.fn(),
    })),
    Rect: vi.fn().mockImplementation(() => ({})),
  };
});

describe("DrawingArea", () => {
  beforeEach(() => {
    toolStore.setSelectedTool("shape");
    toolStore.setShapeColor("#00ff00");
    toolStore.setShapeType("rectangle");
  });

  it("should render the canvas element", () => {
    render(<DrawingArea />);
    const canvasEl = screen.getByTestId("drawing-canvas");
    expect(canvasEl).toBeInTheDocument();
  });

  it("should initialize fabric canvas when mounted", () => {
    const canvasMock = (Canvas as unknown as Mock).mock.results[0].value;

    expect(Canvas).toHaveBeenCalled();
    expect(canvasMock.on).toHaveBeenCalledWith(
      "mouse:down",
      expect.any(Function)
    );
  });

  it("should respond to tool changes in the toolStore", () => {
    render(<DrawingArea />);
    act(() => {
      toolStore.setSelectedTool("fill");
      toolStore.setFillColor("#123456");
    });

    // Further assertions would go here once behavior is tied to canvas
    expect(toolStore.selectedTool).toBe("fill");
  });
});
