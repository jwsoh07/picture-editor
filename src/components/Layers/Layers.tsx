import { observer } from "mobx-react-lite";
import { ScrollArea, VisuallyHidden } from "radix-ui";
import { BlendingModeIcon, MixIcon } from "@radix-ui/react-icons";

import styles from "./Layers.module.css";
import { layerStore } from "../../stores/LayerStore";

const LayerTypeIcons = {
  shape: <MixIcon />,
  fill: <BlendingModeIcon />,
};

const Layers = observer(() => {
  if (layerStore.layers.length === 0) return null;

  return (
    <ScrollArea.Root className={styles.Root} style={{ position: "absolute" }}>
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
