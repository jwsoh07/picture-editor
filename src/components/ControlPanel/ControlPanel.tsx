import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { Cross1Icon } from "@radix-ui/react-icons";
import toolStore from "../../stores/ToolStore";
import { ColorPicker } from "./ColorPicker";
import { capitalizeWords } from "../../utility/capitalizeWords";
import { ShapePicker } from "./ShapePicker";

const PanelWrapper = styled.div`
  width: 275px;
  padding: 1rem;
  border-right: 0.5px solid #f3f3f3;
  background-color: #fefefe;
`;

const ControlGroup = styled.div`
  margin-bottom: 1rem;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.25rem;
`;

const CloseButton = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
`;

const ControlPanel = observer(() => {
  const { selectedTool, toolOptions } = toolStore;

  if (!selectedTool) return null;

  return (
    <PanelWrapper data-testid="control-panel">
      {selectedTool && (
        <>
          <Head>
            <Title>{capitalizeWords(selectedTool + " Tool Options")}</Title>
            <CloseButton onClick={() => toolStore.setSelectedTool(null)}>
              <Cross1Icon />
            </CloseButton>
          </Head>
          <ControlGroup>
            {selectedTool === "shape" && (
              <>
                <ColorPicker
                  label="Color"
                  color={toolStore.toolOptions.shape.color}
                  onChange={(newColor) => toolStore.setShapeColor(newColor)}
                />
                <ShapePicker />
              </>
            )}

            {selectedTool === "fill" && (
              <ColorPicker
                label="Color"
                color={toolOptions.fill.color}
                onChange={(newColor) => toolStore.setFillColor(newColor)}
              />
            )}
          </ControlGroup>
        </>
      )}
    </PanelWrapper>
  );
});

export default ControlPanel;
