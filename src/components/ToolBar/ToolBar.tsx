import { observer } from "mobx-react-lite";
import toolStore from "../../stores/ToolStore";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  PaintBucketIcon,
  ShapeCollectionIcon,
} from "@hugeicons/core-free-icons";

import styles from "./ToolBar.module.css";
import { Toolbar } from "radix-ui";

import ShapePicker from "../ControlPanel/ShapePicker";
import ColorPicker from "../ControlPanel/ColorPicker";
import ToolIcon from "./ToolIcon";

const ToolBar = observer(() => {
  const tools = [
    {
      id: "shape",
      label: "Shape tool",
      icon: <HugeiconsIcon icon={ShapeCollectionIcon} size={20} />,
      displaySettings: (
        <>
          <ShapePicker />
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
        return <ToolIcon tool={tool} />;
      })}
      <Toolbar.Separator className={styles.Separator} />
    </Toolbar.Root>
  );
});

export default ToolBar;
