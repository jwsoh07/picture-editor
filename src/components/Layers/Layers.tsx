import { observer } from "mobx-react-lite";
import { PiShapesLight } from "react-icons/pi";
import { IoColorFillOutline } from "react-icons/io5";

import styled from "styled-components";
import { layerStore } from "../../stores/LayerStore";

const ICON_SIZE = "1.25rem";

const ListItemIconMap = {
  shape: <PiShapesLight size={ICON_SIZE} />,
  fill: <IoColorFillOutline size={ICON_SIZE} />,
};

const Wrapper = styled.div`
  // provides spacing between the ToolBar and Layers
  // components, as well as the right edge of screen.
  --edge-offset: 20px;

  position: absolute;
  right: var(--edge-offset);
  top: calc(var(--toolbar-height) + var(--edge-offset));
  padding: 15px;
  background: #fefefe;
  max-height: 450px;
  overflow: scroll;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 15px;
`;

const LayersList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LayerListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  border: 1px solid #f2f2f2;
  border-radius: 2px;
  flex-direction: column;
  min-width: 220px;
`;

const ListItemHead = styled.span`
  font-size: 0.8rem;
  width: 100%;
`;

const ListItemBody = styled.div`
  display: flex;
  width: 100%;
  gap: 8px;
  align-items: center;
  font-size: 0.75rem;
`;

export const Layers = observer(() => {
  if (layerStore.layers.length === 0) return null;

  return (
    <Wrapper data-testid="layers-panel">
      <Title>Layers</Title>
      <LayersList>
        {layerStore.layers.map((layer, index) => (
          <LayerListItem key={layer.id}>
            <ListItemHead>{`Layer #${index + 1}`}</ListItemHead>
            <ListItemBody>
              {ListItemIconMap[layer.tool]}
              <span>{layer.tool}</span>
            </ListItemBody>
            {/* Future features: visibility toggle, remove button, etc. */}
          </LayerListItem>
        ))}
      </LayersList>
    </Wrapper>
  );
});
