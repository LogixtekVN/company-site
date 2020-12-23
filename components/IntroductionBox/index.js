import React from "react";
import { Typography } from "@material-ui/core";
import styles from "../../styles/jss/components/introductionBox";

export default function IntroductionBox(props) {
  const classes = styles();
  return (
    <Typography variant="subtitle1" className={classes.introBox}>
      {props.children}
    </Typography>
  );
}
