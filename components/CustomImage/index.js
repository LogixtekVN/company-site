import React from "react";
import styles from "../../styles/jss/components/customImage";
import { Typography } from "@material-ui/core";

export default function CustomImage(props) {
  const classes = styles();
  return (
    <>
      <img src={props.imgUrl} className={classes.image} />
      <Typography variant="h6" align="center">
        {props.title}
      </Typography>
    </>
  );
}
