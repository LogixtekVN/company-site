import React from "react";
import styles from "../../styles/jss/components/listWithIcon";
import { Icon, Typography } from "@material-ui/core";

export default function ListWithIcon(props) {
  const classes = styles();
  const { lists, startIcon, iconColor = "action" } = props;
  return (
    <ul className={classes.listWithIcon}>
      {lists &&
        lists.map((item, index) => (
          <li key={index}>
            <Icon color={iconColor}>{startIcon}</Icon>
            <Typography variant="subtitle1">{item}</Typography>
          </li>
        ))}
    </ul>
  );
}
