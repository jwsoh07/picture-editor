import { observer } from "mobx-react-lite";
import styled from "styled-components";
import toolStore from "../../stores/ToolStore";

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
  const { selectedTool } = toolStore;

  if (!selectedTool) return null;

  return (
    <PanelWrapper data-testid="control-panel">
      {selectedTool === "shape" && (
        <>
          <ControlGroup>
            <label>
              Shape Color:
              <input type="color" defaultValue="#ff0000" />
            </label>
          </ControlGroup>
          <ControlGroup>
            <label>
              Shape Type:
              <select defaultValue="rect">
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
            <input type="color" defaultValue="#ffffff" />
          </label>
        </ControlGroup>
      )}
    </PanelWrapper>
  );
});

export default ControlPanel;
