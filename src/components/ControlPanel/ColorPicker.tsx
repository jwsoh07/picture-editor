import React from "react";
import styled from "styled-components";

type ColorPickerProps = {
  label?: string;
  color: string;
  onChange: (color: string) => void;
};

export const ColorPicker: React.FC<ColorPickerProps> = ({
  label = "Color",
  color,
  onChange,
}) => {
  const inputId = React.useId();

  return (
    <Wrapper>
      <Label htmlFor={inputId}>{label}</Label>
      <InputWrapper>
        <ColorPreview style={{ backgroundColor: color }} />
        <ColorInput
          id={inputId}
          type="color"
          value={color}
          onChange={(e) => onChange(e.target.value)}
        />
      </InputWrapper>
    </Wrapper>
  );
};

// Styled components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: #333;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #ccc;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
`;

const ColorPreview = styled.div`
  width: 100%;
  height: 100%;
`;

const ColorInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;
