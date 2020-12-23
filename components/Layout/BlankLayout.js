import React from "react";
import styles from "../../styles/jss/components/layout";

export default function BlankLayout(props) {
  const classes = styles();
  return <div className={classes.blankLayout}>{props.children}</div>;
}
