import { observer } from "mobx-react-lite";
import { layerStore } from "../../stores/LayerStore";

export const Layers = observer(() => {
  if (layerStore.layers.length === 0) return null;

  return (
    <div data-testid="layers-panel">
      <h2>Layers</h2>
      <ul>
        {layerStore.layers.map((layer) => (
          <li key={layer.id}>
            <span>{layer.tool}</span>
            {/* Future features: visibility toggle, remove button, etc. */}
          </li>
        ))}
      </ul>
    </div>
  );
});
