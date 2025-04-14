import { observer } from "mobx-react-lite";
import toolStore from "../../stores/ToolStore";

import { Toolbar, Tooltip, Popover } from "radix-ui";

import styles from "./ToolBar.module.css";

import { ShapePicker } from "../ControlPanel/ShapePicker";
import { capitalizeWords } from "../../utility/capitalizeWords";
import { ColorPicker } from "../ControlPanel/ColorPicker";
import {
  PaintBucketIcon,
  ShapeCollectionIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

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
        return (
          <Tooltip.Provider delayDuration={500}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <Toolbar.Button
                      className={styles.IconButton}
                      value={tool.id}
                      aria-label={tool.label}
                      onClick={() => toolStore.setSelectedTool(tool.id)}
                    >
                      {tool.icon}
                    </Toolbar.Button>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content className={styles.Content} sideOffset={5}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                        }}
                      >
                        {tool.displaySettings}
                      </div>

                      <Popover.Arrow className={styles.Arrow} />
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className={styles.ToolTipContent}>
                  {capitalizeWords(tool.id)}
                  <Tooltip.Arrow className={styles.Arrow} />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        );
      })}
      <Toolbar.Separator className={styles.Separator} />
    </Toolbar.Root>
  );
});

export default ToolBar;
