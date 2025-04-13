import { render, screen } from "@testing-library/react";
import { Layers } from "./Layers";
import { layerStore } from "../../stores/LayerStore";
import { beforeEach, expect, it, test } from "vitest";

// Clear and reset store between tests
beforeEach(() => {
  layerStore.layers = [];
});

test("renders layers", () => {
  // Add a mock layer
  layerStore.layers = [
    {
      id: "1",
      type: "shape",
      tool: "shape",
      options: {
        type: "rectangle",
        color: "FFFFFF",
      },
      timestamp: Date.now(),
    },
  ];

  const { getByText } = render(<Layers />);
  expect(getByText("shape")).toBeInTheDocument();
});

it("renders multiple layers", () => {
  layerStore.layers = [
    {
      id: "1",
      type: "shape",
      tool: "shape",
      options: {
        type: "rectangle",
        color: "FFFFFF",
      },
      timestamp: Date.now(),
    },
    {
      id: "2",
      type: "background",
      tool: "fill",
      options: {
        color: "F3G3F3",
      },
      timestamp: Date.now(),
    },
  ];

  render(<Layers />);
  expect(screen.getByText("shape")).toBeInTheDocument();
  expect(screen.getByText("fill")).toBeInTheDocument();
});

it("does not render the Layers panel when there are no layers", () => {
  render(<Layers />);
  expect(screen.queryByTestId("layers-panel")).not.toBeInTheDocument();
});
