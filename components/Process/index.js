import React from "react";
import { Typography } from "@material-ui/core";
import styles from "../../styles/jss/components/process";

export default function Process({ listProcess }) {
  const classes = styles();
  return (
    <div className={classes.process}>
      {listProcess &&
        listProcess.map((process, index) => (
          <div
            key={index}
            className={`${classes.process__stepper} ${
              classes["fillColor" + index]
            }`}
          >
            <Typography
              variant="h5"
              className={`${classes.process__stepper__no} ${
                classes["fillColor" + index]
              }`}
            >
              {index + 1}
            </Typography>
            {process.title && (
              <Typography
                variant="h6"
                gutterBottom
                className={classes.process__stepper__title}
              >
                {process.title}
              </Typography>
            )}
            {process.content && (
              <Typography
                variant="body2"
                className={classes.process__stepper__content}
              >
                {process.content}
              </Typography>
            )}
          </div>
        ))}
    </div>
  );
}
