import React from "react";
import styles from "./MenuToggle.module.css";

const MenuToggle = (props) => {
  const cls = [styles["menu-toggle"], "fa"];
  if (props.isOpen) {
    cls.push("fa-times-circle");
    cls.push(styles.open);
  } else {
    cls.push("fa-bars");
  }
  return <i className={cls.join(" ")} onClick={props.onToggle} />;
};

export default MenuToggle;
