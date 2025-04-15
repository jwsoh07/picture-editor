import { observer } from "mobx-react-lite";
import toolStore from "../../stores/ToolStore";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  PaintBucketIcon,
  ShapeCollectionIcon,
  BrushIcon,
  PencilEdit01Icon,
} from "@hugeicons/core-free-icons";

import styles from "./ToolBar.module.css";
import { RadioGroup, Toolbar } from "radix-ui";

import ShapePicker from "../ControlPanel/ShapePicker";
import ColorPicker from "../ControlPanel/ColorPicker";
import ToolIcon from "./ToolIcon";
import { ToolAttributes } from "../../types";
import Seperator from "../Seperator";

const ToolBar = observer(() => {
  /* This is where we would begin adding a new tool to the toolbar.
   * The 4 necessary attributes for each tool are shown below in each
   * tool object.
   *
   * id - This would differentiate what will happen when the user interacts
   * with <DrawingArea />. e.g. id: shape would create and place shapes on
   * the canvas.
   *
   * label - This is used for labelling the tool that is either visible to
   * sighted users or screen readers.
   *
   * icon - Icon that shows up on ToolBar
   *
   * displaySettings - The input settings we would like the user to be able
   * to configure before applying the tool on the DrawingArea.
   */
  const tools: ToolAttributes[] = [
    {
      id: "pencil",
      label: "Pencil tool",
      icon: (
        <HugeiconsIcon
          icon={PencilEdit01Icon}
          size={20}
          onClick={() => {
            toolStore.setSelectedTool("pencil");
          }}
        />
      ),
      displaySettings: (
        <>
          <ColorPicker
            label="Color"
            color={toolStore.toolOptions.pencil.color}
            onChange={(newColor) => toolStore.setPencilColor(newColor)}
          />
          <Seperator />
          <RadioGroup.Root
            className={styles.RadioRoot}
            defaultValue="small"
            aria-label="Pencil size"
            value={toolStore.toolOptions.pencil.size}
            onValueChange={(newSize) => toolStore.setPencilSize(newSize)}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <RadioGroup.Item
                value="small"
                id="r1"
                className={styles.RadioItem}
              >
                <RadioGroup.Indicator className={styles.RadioIndicator} />
              </RadioGroup.Item>
              <label htmlFor="r1" className={styles.RadioLabel}>
                Small
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <RadioGroup.Item
                value="medium"
                id="r2"
                className={styles.RadioItem}
              >
                <RadioGroup.Indicator className={styles.RadioIndicator} />
              </RadioGroup.Item>
              <label htmlFor="r2" className={styles.RadioLabel}>
                Medium
              </label>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <RadioGroup.Item
                value="large"
                id="r3"
                className={styles.RadioItem}
              >
                <RadioGroup.Indicator className={styles.RadioIndicator} />
              </RadioGroup.Item>
              <label htmlFor="r3" className={styles.RadioLabel}>
                Large
              </label>
            </div>
          </RadioGroup.Root>
        </>
      ),
    },
    {
      id: "brush",
      label: "Brush tool",
      icon: (
        <HugeiconsIcon
          icon={BrushIcon}
          size={20}
          onClick={() => {
            toolStore.setSelectedTool("brush");
          }}
        />
      ),
      displaySettings: <>Using default settings</>,
    },
    {
      id: "shape",
      label: "Shape tool",
      icon: <HugeiconsIcon icon={ShapeCollectionIcon} size={20} />,
      displaySettings: (
        <>
          <ShapePicker />
          <Seperator />
          <ColorPicker
            label="Color"
            color={toolStore.toolOptions.shape.color}
            onChange={(newColor) => toolStore.setShapeColor(newColor)}
          />
        </>
      ),
    },
    {
      id: "fill",
      label: "Fill tool",
      icon: <HugeiconsIcon icon={PaintBucketIcon} size={20} />,
      displaySettings: (
        <ColorPicker
          label="Color"
          color={toolStore.toolOptions.fill.color}
          onChange={(newColor) => toolStore.setFillColor(newColor)}
        />
      ),
    },
  ] as const;

  return (
    <Toolbar.Root className={styles.Root} aria-label="Picture editing tools">
      {tools.map((tool) => {
        return <ToolIcon tool={tool} key={tool.id} />;
      })}
      <Toolbar.Separator className={styles.Separator} />
    </Toolbar.Root>
  );
});

export default ToolBar;
