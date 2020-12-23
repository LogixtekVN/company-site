import { makeStyles } from "@material-ui/core/styles";
import { backgroundLightGray } from "../themes/colors";
import { contentCenter } from "../themes/common";

const ServiceCard = makeStyles({
  serviceCard: {
    ...contentCenter,
    flexDirection: "column",
    height: "100%",
    backgroundColor: backgroundLightGray,
    padding: "30px 10px",
    borderRadius: 4,
    filter: "grayscale(100)",
    "&:hover": {
      filter: "none",
    },
    "& .material-icons": {
      fontSize: 70,
      cursor: "pointer",
    },
    "& h4": {
      fontWeight: "normal",
    },
    "& p": {
      lineHeight: "24px",
      fontSize: 14,
    },
  },
  serviceCard__image: {
    width: 75,
    height: 75,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    cursor: "pointer",
  },
});

export default ServiceCard;
