import { Toolbar } from "radix-ui";
import { BlendingModeIcon, MixIcon } from "@radix-ui/react-icons";

import styles from "./ToolBar.module.css";
import { observer } from "mobx-react-lite";

import toolStore from "../../stores/ToolStore";

const ToolBar = observer(() => {
  const tools = [
    {
      id: "shape",
      label: "Shape tool",
      icon: <MixIcon />,
    },
    {
      id: "fill",
      label: "Fill tool",
      icon: <BlendingModeIcon />,
    },
  ] as const;
  return (
    <Toolbar.Root className={styles.Root} aria-label="Picture editing tools">
      {tools.map((tool) => {
        return (
          <Toolbar.Button
            className={styles.Button}
            value={tool.id}
            aria-label={tool.label}
            onClick={() => toolStore.setSelectedTool(tool.id)}
          >
            {tool.icon}
          </Toolbar.Button>
        );
      })}

      <Toolbar.Separator className={styles.Separator} />

      {/* For Undo, Redo, etc.. */}
    </Toolbar.Root>
  );
});

export default ToolBar;
