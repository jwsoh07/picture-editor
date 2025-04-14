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

export const ShapePicker = observer(() => {
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
  color: ${({ $selected }) => ($selected ? "#0284c7" : "#666")};
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f9ff;
    color: #0284c7;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
