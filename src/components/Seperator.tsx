import { Separator } from "radix-ui";
import styles from "./Seperator.module.css";

const Seperator = () => {
  return (
    <Separator.Root className={styles.Root} style={{ margin: "15px 0" }} />
  );
};

export default Seperator;
