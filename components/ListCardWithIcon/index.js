import React from "react";
import styles from "../../styles/jss/components/listCardWithIcon";

import { Grid, Paper, Typography, Icon } from "@material-ui/core";

export default function ListCardWithIcon(props) {
  const classes = styles();
  const { lists, md = 3 } = props;
  return (
    <Grid container spacing={3} className={classes.listCardWithIcon}>
      {lists &&
        lists.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={md}>
            <Paper elevation={0} className={classes.listCardItem}>
              {item.startIcon && (
                <Icon className={classes.listCardItem__icon}>
                  {item.startIcon}
                </Icon>
              )}
              <div>
                <Typography
                  variant="h6"
                  gutterBottom
                  className={classes.listCardItem__title}
                >
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.content}</Typography>
              </div>
            </Paper>
          </Grid>
        ))}
    </Grid>
  );
}
