import { makeStyles } from "@material-ui/core/styles";

const TimeLine = makeStyles((theme) => ({
  timeLineItem: {
    display: "flex",
  },
  time: {
    width: "45%",
    textAlign: "right",
  },
  contentWrapper: {
    position: "relative",
    width: "50%",
    minHeight: theme.spacing(10),
    marginLeft: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    borderLeft: "3px solid",
    borderColor: theme.palette.secondary.main,
  },
  timePoint: {
    position: "absolute",
    top: 0,
    left: -9,
    backgroundColor: theme.palette.secondary.contrastText,
    width: 15,
    height: 15,
    borderRadius: "50%",
    border: "3px solid",
    borderColor: theme.palette.secondary.main,
  },
  content: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    time: {
      width: "30%",
    },
    contentWrapper: {
      width: "70%",
    },
  },
}));

export default TimeLine;
