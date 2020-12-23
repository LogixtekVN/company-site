import React from "react";
import styles from "../../styles/jss/components/sectionTitle";

export default function SectionTitle(props) {
  const classes = styles();
  const { title, subTitle } = props;
  return subTitle ? (
    <div className={classes.sectionTitle}>
      <h2>{title}</h2>
      <p>{subTitle}</p>
    </div>
  ) : (
    <div className={classes.sectionSingleTitle}>
      <span className={classes.sectionSingleTitleShadow}>{title}</span>
      <h1>{title}</h1>
    </div>
  );
}
