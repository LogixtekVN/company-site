import { makeStyles } from "@material-ui/core/styles";
import { secondaryLighter } from "../themes/colors";
import { contentCenter } from "../themes/common";

const FeedbackCard = makeStyles({
  feedbackCard: {
    ...contentCenter,
    flexDirection: "column",
    padding: "0 40px 40px 40px",
    height: "100%",
    boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.08)",
  },
  feedbackCard__content: {
    position: "relative",
    fontStyle: "italic",
    fontSize: 18,
    lineHeight: "2rem",
    "& .quote-icon": {
      color: secondaryLighter,
      fontSize: "2.2em",
    },
    "& .open-quote": {
      transform: "rotate(180deg)",
      position: "relative",
      top: 10,
      right: 5,
    },
    "& .close-quote": {
      position: "relative",
      top: 15,
      left: 5,
    },
  },
});

export default FeedbackCard;
