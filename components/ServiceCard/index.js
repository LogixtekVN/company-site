import React from "react";
import styles from "../../styles/jss/components/serviceCard";

export default function ServiceCard(props) {
  const classes = styles();
  const { title, description, imgSrc, symbolImage } = props;
  return (
    <div className={classes.serviceCard}>
      {symbolImage}
      {imgSrc && (
        <span
          style={{ backgroundImage: `url(${imgSrc})` }}
          className={classes.serviceCard__image}
        />
      )}
      {title && <h4>{title}</h4>}
      {description && <p>{description}</p>}
    </div>
  );
}
