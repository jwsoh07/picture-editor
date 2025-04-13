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
  background-color: #fefefe;
  gap: 2px;
  height: var(--toolbar-height);
`;

const ToolButton = styled.button<{ $active: boolean }>`
  background-color: ${(props) =>
    props.$active ? "rgb(242, 242, 242)" : "transparent"};
  border: none;
  color: #333;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

export default ToolBar;
