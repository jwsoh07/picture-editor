import { observer } from "mobx-react-lite";
import { ScrollArea, VisuallyHidden } from "radix-ui";

import styles from "./Layers.module.css";
import { layerStore } from "../../stores/LayerStore";
import {
  BrushIcon,
  PaintBucketIcon,
  PencilEdit01Icon,
  ShapeCollectionIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const LayerTypeIcons = {
  shape: <HugeiconsIcon icon={ShapeCollectionIcon} size={16} />,
  brush: <HugeiconsIcon icon={BrushIcon} size={16} />,
  pencil: <HugeiconsIcon icon={PencilEdit01Icon} size={16} />,
  fill: <HugeiconsIcon icon={PaintBucketIcon} size={16} />,
};

const Layers = observer(() => {
  if (layerStore.layers.length === 0) return null;

  return (
    <ScrollArea.Root
      className={styles.Root}
      style={{ position: "absolute" }}
      data-testid="layers-panel"
    >
      <ScrollArea.Viewport className={styles.Viewport}>
        <div style={{ padding: "15px 20px" }}>
          <div className={styles.Text}>Layers</div>
          {layerStore.layers.map((layer, index) => (
            <div className={styles.Layer} key={layer.id}>
              {LayerTypeIcons[layer.tool]}
              Layer {index + 1}
              <VisuallyHidden.Root>{layer.tool}</VisuallyHidden.Root>
            </div>
          ))}
        </div>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar className={styles.Scrollbar} orientation="vertical">
        <ScrollArea.Thumb className={styles.Thumb} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar
        className={styles.Scrollbar}
        orientation="horizontal"
      >
        <ScrollArea.Thumb className={styles.Thumb} />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className={styles.Corner} />
    </ScrollArea.Root>
  );
});

export default Layers;
