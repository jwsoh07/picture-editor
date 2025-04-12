import { observer } from "mobx-react-lite";
import styled from "styled-components";
import toolStore, { Shape } from "../../stores/ToolStore";

const PanelWrapper = styled.div`
  width: 220px;
  padding: 1rem;
  border-right: 1px solid #ddd;
  background-color: #fafafa;
`;

const ControlGroup = styled.div`
  margin-bottom: 1rem;
`;

const ControlPanel = observer(() => {
  const { selectedTool, toolOptions } = toolStore;

  if (!selectedTool) return null;

  return (
    <PanelWrapper data-testid="control-panel">
      {selectedTool === "shape" && (
        <>
          <ControlGroup>
            <label>
              Shape Color:
              <input
                type="color"
                value={toolOptions.shape.color}
                onChange={(e) => toolStore.setShapeColor(e.target.value)}
              />
            </label>
          </ControlGroup>
          <ControlGroup>
            <label>
              Shape Type:
              <select
                value={toolOptions.shape.type}
                onChange={(e) =>
                  toolStore.setShapeType(e.target.value as Shape)
                }
              >
                <option value="rect">Rectangle</option>
                <option value="circle">Circle</option>
              </select>
            </label>
          </ControlGroup>
        </>
      )}

      {selectedTool === "fill" && (
        <ControlGroup>
          <label>
            Background Fill Color:
            <input
              type="color"
              value={toolOptions.fill.color}
              onChange={(e) => toolStore.setFillColor(e.target.value)}
            />
          </label>
        </ControlGroup>
      )}
    </PanelWrapper>
  );
});

export default ControlPanel;
