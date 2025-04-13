import styled from "styled-components";
import { PiShapesLight } from "react-icons/pi";
import { IoColorFillOutline } from "react-icons/io5";
import { observer } from "mobx-react-lite";

import toolStore from "../../stores/ToolStore";
import { ICON_SIZE } from "../../constants";

const ToolBar = observer(() => {
  const tools = [
    {
      id: "shape",
      label: "Shape tool",
      icon: <PiShapesLight size={ICON_SIZE} />,
    },
    {
      id: "fill",
      label: "Fill tool",
      icon: <IoColorFillOutline size={ICON_SIZE} />,
    },
  ] as const;

  return (
    <ToolbarWrapper>
      {tools.map((tool) => (
        <ToolButton
          key={tool.id}
          $active={toolStore.selectedTool === tool.id}
          onClick={() => toolStore.setSelectedTool(tool.id)}
          aria-label={tool.label}
        >
          {tool.icon}
        </ToolButton>
      ))}
    </ToolbarWrapper>
  );
});

const ToolbarWrapper = styled.div`
  display: flex;
  justify-content: start;
  padding: 4px 6px;
  background-color: #fcfcfc;
  gap: 2px;
`;

const ToolButton = styled.button<{ $active: boolean }>`
  background-color: transparent;
  border: none;
  color: ${(props) => (props.$active ? "rgb(255, 0, 0)" : "#333")};
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
`;

export default ToolBar;
