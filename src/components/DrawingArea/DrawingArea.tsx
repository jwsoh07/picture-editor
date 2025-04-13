import { useEffect, useRef } from "react";
import { Canvas, TPointerEvent } from "fabric";

import styled from "styled-components";
import { observer } from "mobx-react-lite";

import toolStore from "../../stores/ToolStore";

import { handleShapeTool } from "../../toolHandlers/shapeTool";
import { handleFillTool } from "../../toolHandlers/fillTool";

const CanvasWrapper = styled.div`
  flex-grow: 1;
  background-color: #f2f2f2;
`;

const DrawingArea = observer(() => {
  const canvasRef = useRef<Canvas | null>(null);
  const canvasElRef = useRef<HTMLCanvasElement>(null);

  // Giving the <canvas> element super powers by transforming
  // it to a fabric canvas.
  useEffect(() => {
    if (!canvasElRef.current) return;

    const fabricCanvas = new Canvas(canvasElRef.current, {
      width: 800,
      height: 600,
      backgroundColor: "#d1d1d1",
    });

    canvasRef.current = fabricCanvas;

    return () => {
      fabricCanvas.dispose();
    };
  }, []);

  // Tells the fabric canvas what to do when the user interacts
  // with the it, given the tools and options selected
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleMouseDown = (opt: { e: TPointerEvent }) => {
      const pointer = canvas.getPointer(opt.e);
      const { selectedTool, toolOptions } = toolStore;

      switch (selectedTool) {
        case "shape":
          handleShapeTool(canvas, pointer, toolOptions.shape);
          break;
        case "fill":
          handleFillTool(canvas, toolOptions.fill);
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

  return (
    <CanvasWrapper>
      <canvas ref={canvasElRef} data-testid="drawing-canvas" />
    </CanvasWrapper>
  );
});

export default DrawingArea;
