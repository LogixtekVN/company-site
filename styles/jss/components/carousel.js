import { makeStyles } from "@material-ui/core/styles";
import { absoluteFullWidthHeight, contentCenter } from "../themes/common";

const Carousel = makeStyles((theme) => {
  const navigateArrow = {
    ...contentCenter,
    position: "absolute",
    zIndex: 5,
    top: "50%",
    color: "#ffffff",
    backgroundColor: "rgba(30, 35, 40, 0.6)",
    textAlign: "center",
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    borderRadius: "50%",
    cursor: "pointer",
    opacity: 0.7,
    [theme.breakpoints.up("sm")]: {
      "& .MuiIcon-root": {
        fontSize: theme.spacing(4),
      },
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1) / 2,
    },
  };
  return {
    mainCarousel: {
      width: "100%",
      height: "100vh",
      position: "relative",
      zIndex: 1,
      ...contentCenter,
      backgroundColor: "rgba(30, 35, 40, 0.6)",
    },

    mainCarousel__item: {
      ...absoluteFullWidthHeight,
      maxWidth: "100vw",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      ...contentCenter,
      "&::before": {
        content: "''",
        ...absoluteFullWidthHeight,
        backgroundColor: "rgba(30, 35, 40, 0.6)",
      },
    },

    carousel__item__title: {
      ...absoluteFullWidthHeight,
      zIndex: 5,
      ...contentCenter,
      flexDirection: "column",
      padding: "0 25%",
      color: "#ffffff",

      "& .mainTitle": {
        fontSize: "5vh",
        fontWeight: 700,
        marginBottom: 10,
      },
      "& .subTitle": {
        fontSize: 18,
        lineHeight: 1.5,
      },
    },

    mainCarousel__dot: {
      position: "absolute",
      zIndex: 5,
      bottom: 20,
      left: 0,
      right: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& span": {
        cursor: "pointer",
        background: "#fff",
        overflow: "hidden",
        border: 0,
        width: 12,
        height: 12,
        borderRadius: 50,
        opacity: 0.5,
        transition: "0.3s",
        margin: "0 5px",
      },
      "& .active": {
        backgroundColor: "#d9232d",
        opacity: 1,
      },
    },

    mainCarousel__arrowLeft: {
      ...navigateArrow,
      left: 0,
    },
    mainCarousel__arrowRight: {
      ...navigateArrow,
      right: 0,
    },

    [theme.breakpoints.down("sm")]: {
      carousel__item__title: {
        padding: "0 10%",
      },
    },
  };
});

export default Carousel;
