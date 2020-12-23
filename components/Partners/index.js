import React from "react";
import styles from "../../styles/jss/components/partners";
import { Grid } from "@material-ui/core";
import { LIST_PARTNER_IMAGES } from "../../constants/Const";

export default function Partners() {
  const classes = styles();
  return (
    <div className={classes.partners}>
      <Grid container spacing={2}>
        {LIST_PARTNER_IMAGES.map((image, index) => (
          <Grid item key={index} xs={12} sm={4} md={3}>
            <img src={image} alt={image} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
