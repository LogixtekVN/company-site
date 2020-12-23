import { makeStyles } from "@material-ui/core/styles";
import { secondaryMain, textMainGray, textLightGray } from "../themes/colors";
import { contentCenter } from "../themes/common";
const smallTitle = {
  fontSize: 14,
  fontWeight: 500,
  padding: 0,
  lineHeight: 1,
  margin: "0 0 5px 0",
  letterSpacing: 2,
  textTransform: "uppercase",
  color: textLightGray,
};
const largeTitle = {
  margin: 0,
  fontSize: "4.5vh",
  fontWeight: 700,
  textTransform: "uppercase",
  color: textMainGray,
};

const beforeAfterLine = {
  content: "''",
  // width: "4vw",
  height: 2,
  display: "inline-block",
  background: secondaryMain,
  margin: 10,
};

const SectionTitle = makeStyles((theme) => ({
  sectionTitle: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    "& h2": {
      ...smallTitle,
      "&::after": {
        content: "''",
        width: 120,
        height: 2,
        display: "inline-block",
        background: secondaryMain,
        margin: "4px 10px",
      },
    },
    "& p": {
      ...largeTitle,
    },
  },
  sectionSingleTitle: {
    position: "relative",
    ...contentCenter,
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(7),
    "& h1": {
      zIndex: 1,
      ...largeTitle,
      color: textMainGray,
      "&::after": {
        ...beforeAfterLine,
      },
      "&::before": {
        ...beforeAfterLine,
      },
    },
  },
  sectionSingleTitleShadow: {
    position: "absolute",
    top: "-2.5vh",
    color: "#f0f1f3",
    left: 0,
    right: 0,
    fontWeight: 700,
    fontSize: "5.5vh",
    textTransform: "uppercase",
    lineHeight: 1.2,
  },
}));

export default SectionTitle;
