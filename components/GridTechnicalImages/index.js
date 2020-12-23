import React from "react";
import styles from "../../styles/jss/components/gridTechnicalImages";
import { useTheme } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from "@material-ui/core";

export default function GridTechnicalImages({ images }) {
  const classes = styles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Grid container justify="center" spacing={matches ? 2 : 5}>
        {images &&
          images.map((imgUrl, index) => (
            <Grid item key={index} xs={4} sm={3} md={3}>
              <img src={imgUrl} className={classes.image} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
