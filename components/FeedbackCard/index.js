import React from "react";
import styles from "../../styles/jss/components/feedbackCard";
import { Paper, Icon, Typography } from "@material-ui/core";

export default function FeedbackCard(props) {
  const classes = styles();
  const { name, position, company, content } = props;
  return (
    <Paper className={classes.feedbackCard}>
      <p className={classes.feedbackCard__content}>
        <Icon className="quote-icon open-quote">format_quote</Icon>
        {content}
        <Icon className="quote-icon close-quote">format_quote</Icon>
      </p>
      <h3>{name}</h3>
      <span>{position}</span>
      <span>{company}</span>
    </Paper>
  );
}
