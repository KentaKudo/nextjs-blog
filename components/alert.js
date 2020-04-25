import cn from "classnames";

import styles from "./alert.module.css";

export default function Alert({ type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === "success",
        [styles.error]: type === "error",
      })}
    >
      {children}
    </div>
  );
}
