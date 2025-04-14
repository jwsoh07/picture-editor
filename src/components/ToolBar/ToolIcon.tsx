import { Toolbar, Tooltip, Popover } from "radix-ui";

import toolStore from "../../stores/ToolStore";

import { ToolAttributes } from "../../types";

import styles from "./ToolIcon.module.css";

import { capitalizeWords } from "../../utility/capitalizeWords";

const ToolIcon = ({ tool }: { tool: ToolAttributes }) => {
  // ToolIcon encompasses the tooltip as well as the popover
  // that holds the display settings for the tool passed in
  // as prop.
  return (
    <Tooltip.Provider>
      <Popover.Root>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Popover.Trigger asChild>
              <Toolbar.Button
                className={styles.IconButton}
                aria-label={tool.label}
                onClick={() => toolStore.setSelectedTool(tool.id)}
              >
                {tool.icon}
              </Toolbar.Button>
            </Popover.Trigger>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className={styles.ToolTipContent} sideOffset={5}>
              {capitalizeWords(tool.id)}
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>

        <Popover.Portal>
          <Popover.Content className={styles.PopoverContent} sideOffset={5}>
            {tool.displaySettings}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </Tooltip.Provider>
  );
};

export default ToolIcon;
