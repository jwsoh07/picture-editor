import { useEffect, useRef } from "react";

import toolStore from "../stores/ToolStore";
import { handleShapeTool } from "../toolHandlers/shapeTool";
import { handleFillTool } from "../toolHandlers/fillTool";
import { handlePencilTool } from "../toolHandlers/pencilTool";
import { handleBrushTool } from "../toolHandlers/brushTool";
import { Canvas, TPointerEvent } from "fabric";
import { Tool } from "../types";

export const useCanvas = (
  canvasElRef: React.RefObject<HTMLCanvasElement | null>
) => {
  const canvasRef = useRef<Canvas | null>(null);

  const { selectedTool } = toolStore;

  // Giving the <canvas> element super powers by transforming
  // it to a fabric canvas.
  useEffect(() => {
    if (!canvasElRef.current) return;

    const fabricCanvas = new Canvas(canvasElRef.current, {
      width: 800,
      height: 600,
      backgroundColor: "white",
    });

    canvasRef.current = fabricCanvas;

    return () => {
      fabricCanvas.dispose();
    };
  }, [canvasElRef]);

  // Tells the fabric canvas what to do when the user interacts
  // with the it, given the tools and options selected
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    /* This would be the last stop to be for adding a new tool.
     * We will need to add a new case in the switch statement below
     * to handle what happens on the DrawingArea upon interacting
     * with it using a new tool.
     *
     * E.g. let's say we have a new "undo" tool, we will then add a
     * case -> "undo" and add the created handleUndoTool, to be stored
     * in toolHandlers directory.
     *
     * It will then look something like this.
     * switch (selectedTool) {
     * ...
     * ...
     * case "fill":
     * handleFillTool(canvas, otherParams);
     * break;
     * ...
     * ...
     *
     * }
     */

    const handleMouseDown = (opt: { e: TPointerEvent }) => {
      const pointer = canvas.getPointer(opt.e);
      const { selectedTool, toolOptions } = toolStore;

      switch (selectedTool) {
        case Tool.Shape:
          handleShapeTool(canvas, pointer, toolOptions.shape);
          break;
        case Tool.Fill:
          handleFillTool(canvas, toolOptions.fill);
          break;
        case Tool.Pencil:
          handlePencilTool(canvas, toolOptions.pencil);
          break;
        case Tool.Brush:
          handleBrushTool(canvas, toolOptions.brush);
          break;
        default:
          break;
      }
    };

    canvas.on("mouse:down", handleMouseDown);

    return () => {
      canvas.off("mouse:down", handleMouseDown);
    };
  }, []);

  // Set up drawing mode when user selects any drawing tool
  useEffect(() => {
    const { selectedTool } = toolStore;

    const canvas = canvasRef.current;
    if (!canvas) return;

    if (selectedTool === Tool.Pencil || selectedTool === Tool.Brush) {
      canvas.isDrawingMode = true;
    } else {
      canvas.isDrawingMode = false;
    }
  }, [selectedTool]);
};
