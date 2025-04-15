import { useRef } from "react";

import { observer } from "mobx-react-lite";

import styles from "./DrawingArea.module.css";
import { useCanvas } from "../../hooks/useCanvas";

const DrawingArea = observer(() => {
  const canvasElRef = useRef<HTMLCanvasElement>(null);
  useCanvas(canvasElRef);

  return (
    <div className={styles.canvasWrapper}>
      <canvas ref={canvasElRef} data-testid="drawing-canvas" />
    </div>
  );
});

export default DrawingArea;
