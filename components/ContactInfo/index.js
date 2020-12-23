import React from "react";
import styles from "../../styles/jss/components/contactInfo";
import { Icon, Typography } from "@material-ui/core";

export default function ContactInfo(props) {
  const classes = styles();
  const { icon, name, info, link } = props;

  const InfoComponent = (
    <div className={classes.contactInfo}>
      <Icon className={classes.icon}>{icon}</Icon>
      <div>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{info}</Typography>
      </div>
    </div>
  );
  if (link) {
    return (
      <a target="_blank" href={link} className={classes.infoLink}>
        {InfoComponent}
      </a>
    );
  }
  return InfoComponent;
}
