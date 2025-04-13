import { observer } from "mobx-react-lite";
import { layerStore } from "../../stores/LayerStore";

export const Layers = observer(() => {
  return (
    <div>
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
