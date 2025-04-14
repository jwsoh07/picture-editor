import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import toolStore from "../../stores/ToolStore";
import { Shape } from "../../types";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  HexagonIcon,
  CircleIcon,
  TriangleIcon,
  RectangularIcon,
} from "@hugeicons/core-free-icons";
import { VisuallyHidden } from "radix-ui";

const shapeIcons: Record<Shape, React.ReactNode> = {
  rectangle: <HugeiconsIcon icon={RectangularIcon} />,
  triangle: <HugeiconsIcon icon={TriangleIcon} />,
  hexagon: <HugeiconsIcon icon={HexagonIcon} />,
  circle: <HugeiconsIcon icon={CircleIcon} />,
};

const ShapePicker = observer(() => {
  const selectedShape = toolStore.toolOptions.shape.type;

  return (
    <Wrapper>
      <VisuallyHidden.Root>Shape Picker</VisuallyHidden.Root>
      <ShapeGrid>
        {Object.entries(shapeIcons).map(([type, icon]) => {
          const isSelected = selectedShape === type;
          return (
            <ShapeButton
              key={type}
              onClick={() => toolStore.setShapeType(type as Shape)}
              $selected={isSelected}
              title={type}
            >
              {icon}
            </ShapeButton>
          );
        })}
      </ShapeGrid>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const ShapeGrid = styled.div`
  display: flex;
  gap: 1px;
`;

const ShapeButton = styled.button<{ $selected: boolean }>`
  all: unset;
  cursor: pointer;
  border-radius: 6px;
  color: ${({ $selected }) => ($selected ? "var(--violet-11)" : "#666")};
  background-color: ${({ $selected }) =>
    $selected ? "var(--violet-3)" : "transparent"};
  transition: all 0.2s ease;
  padding: 2px;

  &:hover {
    background-color: var(--violet-3);
    color: var(--violet-11);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export default ShapePicker;
