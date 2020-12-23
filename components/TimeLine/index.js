import React from "react";
import styles from "../../styles/jss/components/timeLine";
import { Paper, Typography } from "@material-ui/core";

export default function TimeLine({ listTimeLine }) {
  const classes = styles();
  return (
    <>
      {listTimeLine.map((timeline, index) => (
        <div key={index} className={classes.timeLineItem}>
          <Typography className={classes.time}>
            {timeline.time}
          </Typography>
          <div className={classes.contentWrapper}>
            <span className={classes.timePoint} />
            <Typography>{timeline.content}</Typography>
          </div>
        </div>
      ))}
    </>
  );
}
