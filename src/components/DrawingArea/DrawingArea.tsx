import { useEffect, useRef } from "react";
import { Rect, Canvas, Circle, TPointerEvent } from "fabric";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import toolStore from "../../stores/ToolStore";

const CanvasWrapper = styled.div`
  flex-grow: 1;
  background-color: #fff;
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
      backgroundColor: "#ffffff",
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

      if (selectedTool === "shape") {
        const { color, type } = toolOptions.shape;

        let shape;
        if (type === "rectangle") {
          shape = new Rect({
            left: pointer.x,
            top: pointer.y,
            width: 100,
            height: 60,
            fill: color,
          });
        } else if (type === "circle") {
          shape = new Circle({
            left: pointer.x,
            top: pointer.y,
            radius: 40,
            fill: color,
          });
        }

        if (shape) {
          canvas.add(shape);
          canvas.renderAll();
        }
      }

      if (selectedTool === "fill") {
        const { color } = toolOptions.fill;
        canvas.backgroundColor = color;
        canvas.renderAll();
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
