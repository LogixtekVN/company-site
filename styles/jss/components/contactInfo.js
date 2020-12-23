import { makeStyles } from "@material-ui/core/styles";
import { contentCenter } from "../themes/common";

const ContactInfo = makeStyles((theme) => ({
  contactInfo: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      maxWidth: "75%",
    },
  },
  infoLink: {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
  icon: {
    ...contentCenter,
    fontSize: 20,
    width: 44,
    height: 44,
    background: "#edeff1",
    borderRadius: "50%",
    marginRight: theme.spacing(3),
  },
}));

export default ContactInfo;
