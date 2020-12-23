import { makeStyles } from "@material-ui/core/styles";
import { contentCenter } from "../themes/common";

const listRedColor = ["#e87b81", "#e4656c", "#e14f57", "#dd3942", "#d9232d"];
let listBackgroundColor = {};

listRedColor.map((color, index) => {
  listBackgroundColor = {
    ...listBackgroundColor,
    ["fillColor" + index]: {
      backgroundColor: color,
      color: color,
      "&::after": { color: color },
    },
  };
});
const Process = makeStyles((theme) => ({
  ...listBackgroundColor,
  process: {
    display: "flex",
    justifyContent: "center",
    "& :first-child": {
      "&::before": {
        display: "none",
      },
    },
    "& :last-child": {
      "&::after": {
        display: "none",
      },
    },
  },
  process__stepper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "18%",
    padding: theme.spacing(3),
    margin: theme.spacing(1),
    borderRadius: 4,
    color: theme.palette.secondary.contrastText,
    "&::before": {
      content: "''",
      position: "absolute",
      zIndex: 2,
      width: 0,
      height: 0,
    },
    "&::after": {
      content: "''",
      position: "absolute",
      zIndex: 3,
      width: 0,
      height: 0,
    },
  },
  process__stepper__no: {
    ...contentCenter,
    backgroundColor: theme.palette.secondary.contrastText,
    width: theme.spacing(5),
    height: theme.spacing(5),
    borderRadius: "50%",
    fontWeight: "bold",
    marginBottom: theme.spacing(3),
  },
  process__stepper__title: {
    fontWeight: "bold",
  },
  process__stepper__content: {
    textAlign: "center",
  },
  [theme.breakpoints.up("sm")]: {
    process__stepper: {
      "&::before": {
        top: "50%",
        left: -1,
        transform: "translateY(-50%)",
        borderTop: "15px solid transparent",
        borderBottom: "15px solid transparent",
        borderLeft: "18px solid #ffffff",
      },
      "&::after": {
        top: "50%",
        right: -theme.spacing(2),
        transform: "translateY(-50%)",
        borderTop: "15px solid transparent",
        borderBottom: "15px solid transparent",
        borderLeft: "18px solid",
      },
    },
  },
  [theme.breakpoints.down("sm")]: {
    process: {
      flexDirection: "column",
    },
    process__stepper: {
      width: "auto",
      "&::before": {
        left: "50%",
        top: -1,
        transform: "translateX(-50%)",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        borderTop: "18px solid #ffffff",
      },
      "&::after": {
        top: "98%",
        left: "50%",
        transform: "translateX(-50%)",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        borderTop: "18px solid",
      },
    },
  },
}));

export default Process;
