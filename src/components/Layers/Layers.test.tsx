import { render } from "@testing-library/react";
import { Layers } from "./Layers";
import { layerStore } from "../../stores/LayerStore";
import { expect, test } from "vitest";

test("renders layers", () => {
  // Add a mock layer to the store
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
