import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import toolStore from "../../stores/ToolStore";
import { Shape } from "../../types";
import { SquareIcon, CircleIcon } from "@radix-ui/react-icons";

const shapeIcons: Record<Shape, React.ReactNode> = {
  rectangle: <SquareIcon />,
  circle: <CircleIcon />,
};

export const ShapePicker = observer(() => {
  const selectedShape = toolStore.toolOptions.shape.type;

  return (
    <Wrapper>
      <Label>Shape</Label>
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

// Styled Components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: #333;
`;

const ShapeGrid = styled.div`
  display: flex;
  gap: 8px;
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
