import styled from "styled-components";
import { observer } from "mobx-react-lite";

import toolStore from "../../stores/ToolStore";

const ToolBar = observer(() => {
  const tools = [
    { id: "shape", label: "Shape" },
    { id: "fill", label: "Fill" },
  ] as const;

  return (
    <ToolbarWrapper>
      {tools.map((tool) => (
        <ToolButton
          key={tool.id}
          $active={toolStore.selectedTool === tool.id}
          onClick={() => toolStore.setTool(tool.id)}
        >
          {tool.label}
        </ToolButton>
      ))}
    </ToolbarWrapper>
  );
});

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: start;
  padding: 10px;
  background-color: #333;
  gap: 10px;
`;

const ToolButton = styled.button<{ $active: boolean }>`
  background-color: ${(props) => (props.$active ? "#555" : "#777")};
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #999;
  }
`;

export default ToolBar;
